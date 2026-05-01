FROM oven/bun:alpine AS base
WORKDIR /app

# Workspace manifests for reproducible install
COPY package.json bun.lock ./
COPY packages/registry/package.json ./packages/registry/package.json
COPY playground/package.json ./playground/package.json

RUN bun install --frozen-lockfile

# Registry source
COPY packages/registry/src ./packages/registry/src
COPY packages/registry/tsconfig.json ./packages/registry/tsconfig.json

WORKDIR /app/packages/registry
ENV NODE_ENV=production
ENV PORT=8787

CMD ["bun", "run", "src/index.ts"]
