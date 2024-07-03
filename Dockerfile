# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia todo el código fuente del frontend al contenedor
COPY . .

# Compila la aplicación
RUN npm run build

# Exposición del puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
