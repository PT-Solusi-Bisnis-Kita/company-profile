# =========================
# Stage 1 - Build Vite App
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for cache optimization
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build production assets
RUN npm run build


# =========================
# Stage 2 - Nginx Serve
# =========================
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build result from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]