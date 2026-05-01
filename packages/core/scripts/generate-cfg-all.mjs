import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateScript = path.join(__dirname, "generate-cfg-tree.mjs");

/**
 * Central manifest for generated cfg modules.
 *
 * Keep naming explicit here so the generated TypeScript surface stays stable
 * even if source filenames change shape.
 */
const datasets = [
	{
		sourceFile: "data/cfgGlasses.json",
		targetFile: "src/cfg/cfg-glasses.ts",
		exportName: "cfgGlasses",
		aliasName: "glassesTree",
	},
	{
		sourceFile: "data/cfgMagazines.json",
		targetFile: "src/cfg/cfg-magazines.ts",
		exportName: "cfgMagazines",
		aliasName: "magazinesTree",
	},
	{
		sourceFile: "data/cfgWeapons/cfgWeapons_Equipment.json",
		targetFile: "src/cfg/cfg-weapons-equipment.ts",
		exportName: "cfgWeaponsEquipment",
		aliasName: "weaponsEquipment",
	},
	{
		sourceFile: "data/cfgWeapons/cfgWeapons_Items.json",
		targetFile: "src/cfg/cfg-weapons-items.ts",
		exportName: "cfgWeaponsItems",
		aliasName: "weaponsItems",
	},
	{
		sourceFile: "data/cfgWeapons/cfgWeapons_Vehicle_Weapons.json",
		targetFile: "src/cfg/cfg-weapons-vehicle-weapons.ts",
		exportName: "cfgWeaponsVehicleWeapons",
		aliasName: "vehicleWeapons",
	},
	{
		sourceFile: "data/cfgWeapons/cfgWeapons_Weapons.json",
		targetFile: "src/cfg/cfg-weapons-weapons.ts",
		exportName: "cfgWeaponsWeapons",
		aliasName: "weaponsTree",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Animals.json",
		targetFile: "src/cfg/cfg-vehicles-animals.ts",
		exportName: "cfgVehiclesAnimals",
		aliasName: "animals",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Backpacks.json",
		targetFile: "src/cfg/cfg-vehicles-backpacks.ts",
		exportName: "cfgVehiclesBackpacks",
		aliasName: "backpacksTree",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_CIV.json",
		targetFile: "src/cfg/cfg-vehicles-civ.ts",
		exportName: "cfgVehiclesCiv",
		aliasName: "civVehicles",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_EAST.json",
		targetFile: "src/cfg/cfg-vehicles-east.ts",
		exportName: "cfgVehiclesEast",
		aliasName: "eastVehicles",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_EMPTY.json",
		targetFile: "src/cfg/cfg-vehicles-empty.ts",
		exportName: "cfgVehiclesEmpty",
		aliasName: "emptyVehicles",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Equipment.json",
		targetFile: "src/cfg/cfg-vehicles-equipment.ts",
		exportName: "cfgVehiclesEquipment",
		aliasName: "vehicleEquipment",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_GUER.json",
		targetFile: "src/cfg/cfg-vehicles-guer.ts",
		exportName: "cfgVehiclesGuer",
		aliasName: "guerVehicles",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Other.json",
		targetFile: "src/cfg/cfg-vehicles-other.ts",
		exportName: "cfgVehiclesOther",
		aliasName: "otherVehicles",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Ruins_Wrecks.json",
		targetFile: "src/cfg/cfg-vehicles-ruins-wrecks.ts",
		exportName: "cfgVehiclesRuinsWrecks",
		aliasName: "ruinsWrecks",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_Structures.json",
		targetFile: "src/cfg/cfg-vehicles-structures.ts",
		exportName: "cfgVehiclesStructures",
		aliasName: "structuresTree",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_VR_OBJECTS.json",
		targetFile: "src/cfg/cfg-vehicles-vr-objects.ts",
		exportName: "cfgVehiclesVrObjects",
		aliasName: "vrObjects",
	},
	{
		sourceFile: "data/cfgVehicles/cfgVehicles_WEST.json",
		targetFile: "src/cfg/cfg-vehicles-west.ts",
		exportName: "cfgVehiclesWest",
		aliasName: "westVehicles",
	},
];

for (const { sourceFile, targetFile, exportName, aliasName } of datasets) {
	execFileSync(
		process.execPath,
		[generateScript, sourceFile, targetFile, exportName, aliasName],
		{
			stdio: "inherit",
			cwd: path.resolve(__dirname, ".."),
		},
	);
}
