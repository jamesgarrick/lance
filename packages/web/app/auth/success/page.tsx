interface SuccessPageProps {
	searchParams: Promise<{
		token?: string;
		user?: string;
		scope?: string;
		state?: string;
		error?: string;
	}>;
}

export default async function AuthSuccessPage({
	searchParams,
}: SuccessPageProps) {
	const params = await searchParams;
	const token = params.token ?? "";
	const user = params.user ?? "";
	const scope = params.scope ?? "";
	const state = params.state ?? "";
	const error = params.error ?? "";

	return (
		<main style={{ maxWidth: 820, margin: "48px auto", padding: "0 20px" }}>
			<h1>Auth Complete</h1>
			{error ? (
				<p style={{ color: "#b00020" }}>OAuth error: {error}</p>
			) : null}
			{user ? <p>Signed in as: <strong>{user}</strong></p> : null}
			{scope ? <p>Publish scope: <code>{scope}</code></p> : null}
			{state ? <p>State: <code>{state}</code></p> : null}

			<h2>Registry Token</h2>
			{token ? (
				<>
					<p>
						Copy this token and run <code>lance login</code>, then paste it.
					</p>
					<textarea
						readOnly
						value={token}
						style={{
							width: "100%",
							minHeight: 160,
							padding: 12,
							fontFamily: "monospace",
							fontSize: 13,
							boxSizing: "border-box",
						}}
					/>
				</>
			) : (
				<p style={{ color: "#b00020" }}>
					No token found in query parameters.
				</p>
			)}
		</main>
	);
}
