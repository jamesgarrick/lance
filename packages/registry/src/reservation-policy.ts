type ReservationRule = {
	publishers: string[];
};

type ReservationPolicyConfig = {
	reservedScopes?: Record<string, ReservationRule>;
	reservedPackages?: Record<string, ReservationRule>;
	reservedPackageNames?: Record<string, ReservationRule>;
};

export type ReservationPolicyDecision = {
	allowed: boolean;
	reason?: string;
};

const DEFAULT_POLICY: ReservationPolicyConfig = {
	reservedScopes: {
		"@lance": { publishers: ["jamesgarrick"] },
		"@bohemia": { publishers: [] },
		"@arma": { publishers: [] },
		"@bi": { publishers: [] },
		"@official": { publishers: [] },
	},
};

export function loadReservationPolicy(): ReservationPolicyConfig {
	const policy = structuredClone(DEFAULT_POLICY);
	const raw = process.env.REGISTRY_RESERVATION_POLICY_JSON;
	if (!raw) {
		applyDefaultLancePublishers(policy);
		return policy;
	}

	try {
		const parsed = JSON.parse(raw) as ReservationPolicyConfig;
		mergePolicies(policy, parsed);
		applyDefaultLancePublishers(policy);
		return policy;
	} catch {
		applyDefaultLancePublishers(policy);
		return policy;
	}
}

export function canPublishPackage(
	user: string,
	fullName: string,
	policy = loadReservationPolicy(),
): ReservationPolicyDecision {
	const normalizedUser = normalizeUser(user);
	const normalizedFullName = normalizePackageName(fullName);
	const [scope, packageName] = splitPackageName(normalizedFullName);
	if (!scope || !packageName) {
		return { allowed: false, reason: "Invalid package name format" };
	}

	const packageRule = policy.reservedPackages?.[normalizedFullName];
	if (packageRule && !isUserAllowed(normalizedUser, packageRule.publishers)) {
		return {
			allowed: false,
			reason: `Package reserved: ${normalizedFullName}`,
		};
	}

	const packageNameRule = policy.reservedPackageNames?.[packageName];
	if (packageNameRule && !isUserAllowed(normalizedUser, packageNameRule.publishers)) {
		return {
			allowed: false,
			reason: `Package name reserved: ${packageName}`,
		};
	}

	const scopeRule = policy.reservedScopes?.[scope];
	if (scopeRule && !isUserAllowed(normalizedUser, scopeRule.publishers)) {
		return { allowed: false, reason: `Scope reserved: ${scope}` };
	}

	const userScope = `@${normalizedUser}`;
	if (scope === userScope) return { allowed: true };

	if (scopeRule && isUserAllowed(normalizedUser, scopeRule.publishers)) {
		return { allowed: true };
	}

	if (packageRule && isUserAllowed(normalizedUser, packageRule.publishers)) {
		return { allowed: true };
	}

	if (packageNameRule && isUserAllowed(normalizedUser, packageNameRule.publishers)) {
		return { allowed: true };
	}

	return {
		allowed: false,
		reason: `Cannot publish outside your scope (${userScope})`,
	};
}

export function canUseScopeForLogin(
	user: string,
	scope: string,
	policy = loadReservationPolicy(),
): ReservationPolicyDecision {
	const normalizedUser = normalizeUser(user);
	const normalizedScope = normalizeScope(scope);
	const scopeRule = policy.reservedScopes?.[normalizedScope];
	if (!scopeRule) return { allowed: true };
	if (isUserAllowed(normalizedUser, scopeRule.publishers)) return { allowed: true };
	return { allowed: false, reason: `Scope reserved: ${normalizedScope}` };
}

function applyDefaultLancePublishers(policy: ReservationPolicyConfig): void {
	const list = (process.env.LANCE_SCOPE_PUBLISHERS ?? "")
		.split(",")
		.map((x) => normalizeUser(x))
		.filter(Boolean);
	if (list.length === 0) return;
	policy.reservedScopes ??= {};
	policy.reservedScopes["@lance"] = { publishers: list };
}

function mergePolicies(base: ReservationPolicyConfig, extra: ReservationPolicyConfig): void {
	base.reservedScopes = { ...(base.reservedScopes ?? {}), ...(extra.reservedScopes ?? {}) };
	base.reservedPackages = {
		...(base.reservedPackages ?? {}),
		...(extra.reservedPackages ?? {}),
	};
	base.reservedPackageNames = {
		...(base.reservedPackageNames ?? {}),
		...(extra.reservedPackageNames ?? {}),
	};
}

function isUserAllowed(user: string, publishers: string[]): boolean {
	const allowed = new Set((publishers ?? []).map((x) => normalizeUser(x)).filter(Boolean));
	return allowed.has(user);
}

function splitPackageName(fullName: string): [string | null, string | null] {
	const idx = fullName.indexOf("/");
	if (idx <= 0 || idx >= fullName.length - 1) return [null, null];
	return [fullName.slice(0, idx), fullName.slice(idx + 1)];
}

function normalizeUser(user: string): string {
	return user.trim().toLowerCase();
}

function normalizeScope(scope: string): string {
	return scope.trim().toLowerCase();
}

function normalizePackageName(fullName: string): string {
	return fullName.trim().toLowerCase();
}
