# Lance AST Transpilation Plan

This document outlines the major work required to turn `lance` into a
TypeScript-to-SQF transpiler that uses the `lance-sqf-types` type library as a
semantic contract.

The current repo has `ts-morph` available, but no compiler pipeline exists yet.
This plan therefore starts from first principles and assumes we are building the
transpiler architecture from scratch.

## Goals

- Accept TypeScript source files as input.
- Load and understand the `lance-sqf-types` type library during analysis.
- Produce valid, readable SQF output.
- Prefer idiomatic TS authoring over literal SQF parity where the language model
  permits it.
- Keep the compiler architecture flexible enough to support future class/OOP
  lowering.

## Non-Goals For First Milestone

- Full TypeScript language support.
- Full SQF command coverage.
- Optimization-heavy code generation.
- Perfect source maps or IDE-grade diagnostics.
- User-defined classes with full inheritance semantics.

## Big Phases

## 1. Define The Authoring Subset

Before implementing codegen, define exactly which TypeScript features `lance`
 accepts in the first supported subset.

- Decide the initial syntax surface:
  variable declarations, functions, expressions, conditionals, loops, arrays,
  object access, calls, imports, and simple types.
- Decide what is explicitly unsupported in v1:
  async/await, generators, decorators, exceptions, namespaces, advanced
  metaprogramming, destructuring edge cases, etc.
- Decide how strict the compiler should be:
  reject unsupported syntax immediately instead of guessing.
- Define the supported `lance-sqf-types` usage style:
  free functions, instance-style calls, cfg object usage, and namespace-backed
  globals.

Deliverable:
- A language subset spec with examples of supported and rejected TS code.

## 2. Define The Internal Compiler Architecture

Pick a staged compiler design instead of emitting SQF directly from raw TS AST
 nodes.

Recommended stages:
1. Parse TypeScript and build a semantic project.
2. Lower TS AST into a Lance IR.
3. Normalize the IR into SQF-compatible control/data flow.
4. Emit SQF text from normalized IR.

This avoids coupling SQF codegen directly to TypeScript syntax and makes later
 OOP lowering possible.

Deliverable:
- A compiler architecture doc with stage boundaries and data structures.

## 3. Project And Program Loading

Build the front door of the compiler.

- Create a `ts-morph` project loader.
- Support one or more source entry files.
- Resolve imports against local project files.
- Resolve typings from `lance-sqf-types`.
- Expose compiler options and entrypoints via a small CLI and programmatic API.

Key questions:
- Does `lance` compile one file to one SQF file, or one TS module graph to one
  SQF bundle?
- How are relative imports lowered in SQF, if at all?
- How much top-level executable TS should map directly to top-level SQF?

Deliverable:
- `compileProject(...)` and `compileFile(...)` entry APIs.

## 4. Semantic Analysis Layer

Build the analysis layer that understands not just syntax, but meaning.

- Resolve symbols for variables, functions, imports, classes, methods, and
  property accesses.
- Resolve call targets against `lance-sqf-types`.
- Classify expressions as:
  local variable access, namespace/global access, SQF intrinsic call, cfg value,
  method call, literal, etc.
- Detect unsupported constructs early with good diagnostics.

This phase is where `player.addWeapon(cfgWeapons.arifle.ak12)` becomes a known
 semantic shape rather than just a chain of AST nodes.

Deliverable:
- A semantic classifier layer with compiler diagnostics.

## 5. Define The Lance IR

Introduce an intermediate representation designed around SQF, not TS.

Recommended IR concepts:
- values
- variables
- statements
- blocks
- labels / control flow
- function definitions
- calls
- command invocations
- namespace reads/writes
- cfg constants

The IR should preserve source positions and resolved types where useful.

Key design rule:
- The IR should express intent like “SQF command call” and “namespace variable
  set”, not just “generic function call”.

Deliverable:
- IR type definitions and builder utilities.

## 6. Lower TypeScript Syntax Into IR

Implement the first major lowering pass from TS AST to Lance IR.

Priorities:
- literals
- identifiers
- variable declarations
- assignments
- binary/unary expressions
- function declarations
- return statements
- if/else
- while / for loops
- arrays
- call expressions
- property access expressions

Important special cases:
- method calls on typed SQF objects
- free-function calls from `lance-sqf-types`
- cfg object accesses like `cfgWeapons.arifle.ak12`
- imported constants and aliases

Deliverable:
- A first lowering pipeline that handles a minimal end-to-end example.

## 7. SQF Semantics Normalization

TypeScript and SQF have different runtime models. Add normalization passes to
 bridge the gap.

Examples:
- Convert block-scoped declarations to an SQF-compatible local variable model.
- Normalize boolean and nullish logic where needed.
- Decide how function scope maps to SQF script scope.
- Normalize `for` loops into SQF loop forms.
- Rewrite higher-level method forms into explicit SQF command calls.
- Flatten expressions that require temporary variables for valid SQF emission.

This phase is also where future class support will lower to plain SQF-friendly
 data structures and functions.

Deliverable:
- IR normalization passes that remove TS-only semantics before emission.

## 8. Model SQF Call Emission

Design the translation rules from typed API usage to SQF syntax.

Examples:
- `setDamage(target, 1)` -> `target setDamage 1`
- `target.setDamage(1)` -> `target setDamage 1`
- `target.setUnitLoadout(loadout)` -> `target setUnitLoadout loadout`
- cfg item access -> literal SQF class string

This needs a call-shape registry or lowering table:
- unary SQF commands
- binary SQF commands
- n-ary helper wrappers
- special syntax forms

Deliverable:
- A command lowering registry keyed by resolved symbols or canonical IDs.

## 9. Emit SQF Text

Once IR is normalized, implement deterministic SQF text emission.

Requirements:
- stable formatting
- readable indentation
- minimal unnecessary parentheses
- correct command ordering and grouping
- correct block and script syntax

You will likely want a small printer instead of string concatenation everywhere.

Deliverable:
- A pure emitter from normalized IR to SQF string output.

## 10. Diagnostics And Error Reporting

Unsupported syntax and invalid semantic patterns must fail clearly.

Diagnostics should include:
- source location
- compiler phase
- short message
- suggested fix where possible

Examples:
- unsupported TS feature
- unresolved SQF command shape
- illegal class/object usage
- invalid cfg value usage
- ambiguous or unsafe semantic lowering

Deliverable:
- A structured diagnostics system with human-readable formatting.

## 11. Test Harness And Golden Outputs

The compiler must be test-driven from the start.

Recommended test types:
- AST/semantic unit tests
- IR lowering tests
- normalization tests
- emitter snapshot tests
- end-to-end fixture tests

Golden tests are especially important:
- input `.ts`
- output `.sqf`
- expected diagnostics for invalid inputs

Deliverable:
- A `fixtures/` or `tests/` layout with golden SQF snapshots.

## 12. Minimal End-To-End Milestone

The first true milestone should be deliberately small.

Suggested milestone:
- compile a single TS file
- support imports from `lance-sqf-types`
- support variable declarations, function calls, `if`, and simple loops
- support object/unit method lowering
- support cfg object values
- emit one SQF output file

Example target program:
- create a simple unit script that sets behaviour, adds a weapon, and moves a
  unit.

Deliverable:
- One working demo that proves the whole pipeline.

## 13. OOP / Class Lowering Strategy

You mentioned eventually using TS advantages for more organized OOP authoring.
That needs an explicit lowering plan before real class support lands.

Likely approach:
- treat classes as authoring-time sugar
- lower instance state into plain objects / namespace maps / variable records
- lower methods into standalone functions with explicit receiver parameters
- restrict inheritance and dynamic dispatch initially

Questions to answer:
- Are classes runtime-real, or compile-time-only?
- How are object fields stored in SQF?
- Are constructors lowered to factory functions?
- Do methods compile to `fn(self, ...)` style helpers?

Deliverable:
- A class lowering strategy doc before implementation begins.

## 14. CLI And Build Integration

Once the compiler works, package it for actual use.

- CLI command like `lance compile src/main.ts`
- output path selection
- watch mode later
- config file support later
- integration with mission/mod build workflows

Deliverable:
- A usable CLI for local compilation.

## 15. Expansion Tracks After MVP

After the first end-to-end milestone:

- broaden supported TS syntax
- broaden SQF intrinsic coverage
- add cfg support for more domains
- add namespace/global modeling
- add class lowering
- improve diagnostics
- add optimization passes
- support multiple output units / bundling strategies

## Recommended Immediate Execution Order

If starting implementation now, the order should be:

1. Write the supported TS subset spec.
2. Define the compiler pipeline and Lance IR.
3. Build project loading with `ts-morph`.
4. Implement semantic classification for `lance-sqf-types` calls and cfg access.
5. Lower a very small TS subset into IR.
6. Emit SQF for direct command-call examples.
7. Add tests and golden fixtures around that vertical slice.
8. Expand syntax support incrementally.

## First Concrete Vertical Slice

The best first real feature slice is:

- parse one TS file
- resolve import from `lance-sqf-types`
- support:
  `const`
  local variables
  `if`
  simple function call expressions
  method calls on `Unit`
  cfg object accesses
- emit working SQF for:
  `player.addWeapon(cfgWeapons.arifle.ak12)`
  `player.setBehaviour("AWARE")`

This will prove the three most important semantic paths:
- typed object method lowering
- free/config constant lowering
- SQF command emission

## Suggested Repo Additions

As implementation starts, add:

- `docs/`
  compiler architecture docs
- `src/compiler/`
  project loading, diagnostics, orchestration
- `src/ir/`
  IR node definitions
- `src/lowering/`
  TS AST -> IR
- `src/normalize/`
  IR normalization passes
- `src/emit/`
  SQF printer
- `tests/`
  fixtures and golden outputs

## Success Criteria

The AST transpilation effort is on the right track when:

- TS code using `lance-sqf-types` can be semantically resolved.
- The compiler rejects unsupported syntax clearly.
- A small TS program consistently emits valid SQF.
- The emission path is driven by resolved meaning, not brittle string matching.
- The architecture leaves room for future class/OOP lowering without a rewrite.
