# Lance Language Spec

This directory specifies the **target language model** for Lance — the TypeScript subset users author in, and the SQF that subset lowers to. It is the design vision; the compiler implementation may lag.

Each section follows the same shape: short prose explaining the model, then `ts` / `sqf` block pairs showing concrete lowerings.

## Sections

| #   | File                                       | Topic                                                            |
| --- | ------------------------------------------ | ---------------------------------------------------------------- |
| 1   | [variables.md](./variables.md)             | local/global bindings, destructuring                             |
| 2   | [functions.md](./functions.md)             | declarations, parameters, calling conventions, first-class code  |
| 3   | [control-flow.md](./control-flow.md)       | if, loops, switch, try/catch, break/continue, early return       |
| 4   | [values.md](./values.md)                   | literals, arrays, objects/hashmaps, tuples                       |
| 5   | [expressions.md](./expressions.md)         | operators, equality, coercion, optional chaining                 |
| 6   | [modules.md](./modules.md)                 | imports/exports, multi-file projects, CfgFunctions registration  |
| 7   | [async.md](./async.md)                     | async/await, `sleep`, `waitUntil`, CPS transform                 |
| 8   | [networking.md](./networking.md)           | locality, `publicVariable`, `remoteExec`, JIP                    |
| 9   | [event-handlers.md](./event-handlers.md)   | object/mission/UI event handlers, lifetimes                      |
| 10  | [classes.md](./classes.md)                 | OOP lowering strategy — fields, methods, dispatch                |
| 11  | [types.md](./types.md)                     | lance contract, branded primitives, type-driven emit   |
| 12  | [cfg.md](./cfg.md)                         | `cfgWeapons` / `cfgMagazines` / etc. resolution to string class names |
| 13  | [diagnostics.md](./diagnostics.md)         | compile-time error/warning model, codes, fix suggestions         |
| 14  | [errors.md](./errors.md)                   | runtime errors: `throw`/`catch`, Error class hierarchy, auto-wrap |

## Conventions

- `ts` blocks show input. `sqf` blocks show emitted output.
- Underscored SQF variables (`_unit`) are the Lance name-mangling for TypeScript locals.
- `TAG_` is a placeholder — actual prefix is project-configured (see [modules.md](./modules.md)).
- Where multiple lowering strategies apply, the spec picks one as canonical and notes the alternatives under "Open Questions" at the end of the section.

## Status

This is the **planned** model. Sections may describe features ahead of the implementation. The transpiler should reject unspecified syntax with a `LANCE_UNSUPPORTED` diagnostic until the corresponding spec section lands.
