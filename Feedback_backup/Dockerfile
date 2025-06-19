# Dockerfile for Feedback App

# --- 1. Base Stage ---
# Use a specific Node.js version for consistency
FROM node:20-alpine AS base
WORKDIR /app

# --- 2. Dependencies Stage ---
FROM base AS deps
# Copy package manager files
COPY package.json package-lock.json* ./
# Install dependencies
RUN npm install --legacy-peer-deps

# --- 3. Build Stage ---
FROM base AS builder
# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all application code
COPY . .
# Build the Next.js application
RUN npm run build

# --- 4. Runner Stage (Final Image) ---
FROM base AS runner
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy the built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app will run on
EXPOSE 3000

# The command to start the application
CMD ["node", "server.js"] 