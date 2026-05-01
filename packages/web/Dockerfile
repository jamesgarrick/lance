FROM oven/bun:alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lock ./
COPY packages ./packages
COPY playground ./playground
RUN bun install --frozen-lockfile

FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN bun install --frozen-lockfile
WORKDIR /app/packages/web
RUN bun run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

USER bun

# 1. Copy the standalone output (this brings over /app/packages/web/server.js and /app/node_modules)
COPY --from=builder --chown=bun:bun /app/packages/web/.next/standalone ./

# 2. Copy static and public files into the preserved monorepo structure
COPY --from=builder --chown=bun:bun /app/packages/web/.next/static ./packages/web/.next/static
COPY --from=builder --chown=bun:bun /app/packages/web/public ./packages/web/public

EXPOSE 3000

# 3. Target the nested server.js
CMD ["bun", "run", "packages/web/server.js"]
