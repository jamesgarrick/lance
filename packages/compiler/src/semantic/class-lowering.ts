import { Node } from "ts-morph";
import type { ClassDeclaration, PropertyDeclaration } from "ts-morph";

export type ClassLoweringKind = "primitive-wrapper" | "hashmap-class";

const PRIMITIVE_WRAPPER_INTERFACE_NAMES = new Set([
  "String",
  "Number",
  "Array",
  "IString",
  "INumber",
  "IArray",
]);

/**
 * Classifies a TS class into a lowering strategy.
 *
 * Primitive wrappers are stdlib-style classes implementing one of the
 * `@lance/core` primitive interfaces. All other classes lower as hashmap
 * instances.
 */
export function classifyClassLoweringKind(
  cls: ClassDeclaration,
  lanceCorePackageName: string = "@lance/core",
): ClassLoweringKind {
  return isPrimitiveWrapperClass(cls, lanceCorePackageName)
    ? "primitive-wrapper"
    : "hashmap-class";
}

/**
 * For primitive wrappers, returns the first private instance field name
 * (e.g. `_string`, `_number`, `_array`) used as the backing value.
 */
export function getPrimitiveWrapperBackingFieldName(
  cls: ClassDeclaration,
  lanceCorePackageName: string = "@lance/core",
): string | undefined {
  if (!isPrimitiveWrapperClass(cls, lanceCorePackageName)) return undefined;

  const firstPrivateField = cls
    .getMembers()
    .find((m): m is PropertyDeclaration => Node.isPropertyDeclaration(m) && m.hasModifier("private"));

  return firstPrivateField?.getName();
}

function isPrimitiveWrapperClass(
  cls: ClassDeclaration,
  lanceCorePackageName: string,
): boolean {
  for (const impl of cls.getImplements()) {
    const ifaceType = impl.getType();
    const ifaceSymbol = ifaceType.getSymbol();

    // Fallback to syntax text if symbol resolution is unavailable.
    const syntaxName = impl.getExpression().getText();
    const symbolName = ifaceSymbol?.getName() ?? syntaxName;
    if (!PRIMITIVE_WRAPPER_INTERFACE_NAMES.has(symbolName)) continue;

    for (const decl of ifaceSymbol?.getDeclarations() ?? []) {
      const filePath = decl.getSourceFile().getFilePath();
      if (isLanceCorePrimitiveInterfaceFile(filePath, lanceCorePackageName)) {
        return true;
      }
    }
  }

  return false;
}

function isLanceCorePrimitiveInterfaceFile(filePath: string, lanceCorePackageName: string): boolean {
  // Handles both:
  // - /node_modules/@lance/core/types/string.d.ts
  // - virtual ts-morph paths for in-memory module declarations
  const normalized = filePath.replaceAll("\\", "/").toLowerCase();
  const pkg = lanceCorePackageName.toLowerCase();

  return normalized.includes(`${pkg}/types/string`)
    || normalized.includes(`${pkg}/types/number`)
    || normalized.includes(`${pkg}/types/array`);
}
