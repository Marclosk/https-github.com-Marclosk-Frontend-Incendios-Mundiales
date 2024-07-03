# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Ejecuta el comando de construcción
RUN npm run build

# Expone el puerto en el que la aplicación estará disponible
EXPOSE 4000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
