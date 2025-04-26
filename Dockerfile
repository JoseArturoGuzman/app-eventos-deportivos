# Etapa 1: Construcción de la aplicación
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
# Copiar el build generado en la etapa anterior a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto estándar de Nginx
EXPOSE 80

# Comando de inicio por defecto en Nginx
CMD ["nginx", "-g", "daemon off;"]
