FROM oven/bun:alpine AS base
WORKDIR /app

# Workspace files for reproducible install
COPY package.json bun.lock ./
COPY packages ./packages
COPY playground ./playground

RUN bun install --frozen-lockfile

WORKDIR /app/packages/registry
ENV NODE_ENV=production
ENV PORT=8787

CMD ["bun", "run", "src/index.ts"]
