import { ESLintUtils } from "@typescript-eslint/utils";
import ts from "typescript";

const createRule = ESLintUtils.RuleCreator((name) => `https://lance.local/rules/${name}`);
export const noServerLocalArguments = createRule({
    name: "no-server-local-arguments",
    meta: {
        type: "problem",
        docs: {
            description: "Disallow Lance commands that require LocalArgument<T> inside server-only isServer branches.",
        },
        messages: {
            serverLocalArgument: "{{commandName}} requires a local argument and should not be called inside an isServer branch.",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();
        const isServerLocalNames = new Set();
        let serverBranchDepth = 0;
        function isIsServerTest(node) {
            return node.type === "Identifier" && isServerLocalNames.has(node.name);
        }
        function isLocalArgumentCommand(node) {
            if (node.callee.type !== "Identifier")
                return undefined;
            const tsCallee = services.esTreeNodeToTSNodeMap.get(node.callee);
            const symbol = checker.getSymbolAtLocation(tsCallee);
            const declarations = symbol && (symbol.flags & ts.SymbolFlags.Alias) !== 0
                ? checker.getAliasedSymbol(symbol).getDeclarations()
                : symbol?.getDeclarations();
            if (!declarations)
                return undefined;
            for (const declaration of declarations) {
                if (!ts.isFunctionDeclaration(declaration))
                    continue;
                const hasLocalArgument = declaration.parameters.some((parameter) => {
                    const typeNode = parameter.type;
                    return typeNode ? /\bLocalArgument\s*</.test(typeNode.getText()) : false;
                });
                if (hasLocalArgument)
                    return node.callee.name;
            }
            return undefined;
        }
        return {
            ImportDeclaration(node) {
                if (node.source.value !== "@lance/core")
                    return;
                for (const specifier of node.specifiers) {
                    if (specifier.type === "ImportSpecifier" &&
                        specifier.imported.type === "Identifier" &&
                        specifier.imported.name === "isServer") {
                        isServerLocalNames.add(specifier.local.name);
                    }
                }
            },
            "IfStatement > BlockStatement.consequent": function enterServerBranch(node) {
                const parent = node.parent;
                if (parent?.type === "IfStatement" &&
                    isIsServerTest(parent.test)) {
                    serverBranchDepth += 1;
                }
            },
            "IfStatement > BlockStatement.consequent:exit": function exitServerBranch(node) {
                const parent = node.parent;
                if (parent?.type === "IfStatement" &&
                    isIsServerTest(parent.test)) {
                    serverBranchDepth -= 1;
                }
            },
            CallExpression(node) {
                if (serverBranchDepth === 0)
                    return;
                const commandName = isLocalArgumentCommand(node);
                if (!commandName)
                    return;
                context.report({
                    node,
                    messageId: "serverLocalArgument",
                    data: { commandName },
                });
            },
        };
    },
});
export default {
    rules: {
        "no-server-local-arguments": noServerLocalArguments,
    },
};
