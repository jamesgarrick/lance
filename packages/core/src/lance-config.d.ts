export interface LanceConfig {
	build?: {
		entrypoint?: string;
		tag?: string;
		outDir?: string;
		tsConfig?: string;
		typesPackage?: string;
		typesPackageRoot?: string;
		sourceRoot?: string;
	};
	mission?: Record<string, unknown>;
}
