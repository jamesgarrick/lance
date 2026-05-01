export async function registryFetch<T>(
	baseUrl: string,
	path: string,
	init?: RequestInit & { token?: string | null },
): Promise<T> {
	const headers = new Headers(init?.headers);
	headers.set("content-type", "application/json");
	if (init?.token) headers.set("authorization", `Bearer ${init.token}`);

	const url = `${baseUrl}${path}`;
	const res = await fetch(url, { ...init, headers });
	const text = await res.text();
	let json: any = null;
	if (text) {
		try {
			json = JSON.parse(text);
		} catch {
			const snippet = text.slice(0, 200).replace(/\s+/g, " ").trim();
			throw new Error(
				`Registry returned non-JSON from ${url} (status ${res.status}): ${snippet}`,
			);
		}
	}
	if (!res.ok) {
		const message = json?.error ?? `${res.status} ${res.statusText}`;
		throw new Error(message);
	}
	return json as T;
}
