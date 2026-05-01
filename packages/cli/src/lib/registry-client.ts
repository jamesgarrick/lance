export async function registryFetch<T>(
	baseUrl: string,
	path: string,
	init?: RequestInit & { token?: string | null },
): Promise<T> {
	const headers = new Headers(init?.headers);
	headers.set("content-type", "application/json");
	if (init?.token) headers.set("authorization", `Bearer ${init.token}`);

	const res = await fetch(`${baseUrl}${path}`, { ...init, headers });
	const text = await res.text();
	const json = text ? JSON.parse(text) : null;
	if (!res.ok) {
		const message = json?.error ?? `${res.status} ${res.statusText}`;
		throw new Error(message);
	}
	return json as T;
}
