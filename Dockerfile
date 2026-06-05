# Multi-stage build for production

# Stage 1: Build React app
FROM node:18-alpine as frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Backend
FROM node:18-alpine as backend
WORKDIR /app

# Copy backend files
COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

# Copy backend source
COPY server/ ./server/

# Copy built frontend
COPY --from=frontend-builder /app/build ./build

WORKDIR /app/server

EXPOSE 5000

CMD ["npm", "start"]