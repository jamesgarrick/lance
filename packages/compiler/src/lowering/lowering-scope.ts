export interface LoweringScope {
  readonly localNames: Set<string>;
}

export function createScope(): LoweringScope {
  return { localNames: new Set() };
}

export function cloneScope(scope: LoweringScope): LoweringScope {
  return { localNames: new Set(scope.localNames) };
}

export function addLocalName(scope: LoweringScope, name: string): LoweringScope {
  scope.localNames.add(name);
  return scope;
}

export function addLocalNames(scope: LoweringScope, names: readonly string[]): LoweringScope {
  for (const name of names) scope.localNames.add(name);
  return scope;
}

export function resolveIdentifierText(name: string, scope: LoweringScope): string {
  return scope.localNames.has(name) ? `_${name}` : name;
}
