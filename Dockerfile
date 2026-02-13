# -------- 1. Dependencias --------
FROM node:20-alpine AS deps

WORKDIR /app

# Copiamos solo archivos de dependencias
COPY package*.json ./

# Instala dependencias (usa npm; si usas yarn/pnpm, lo cambiamos)
RUN npm ci

# -------- 2. Build de la app --------
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos node_modules ya instalados
COPY --from=deps /app/node_modules ./node_modules

# Copiamos el resto del código
COPY . .

# Construimos Next.js
RUN npm run build

# -------- 3. Imagen final (runtime) --------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copiamos solo lo necesario para correr
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY package*.json ./
COPY --from=deps /app/node_modules ./node_modules

# Puerto por donde exponemos la app dentro del contenedor
EXPOSE 3000

# Comando de arranque
#CMD ["npm", "start"]
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
