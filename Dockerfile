# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package.json package-lock.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia todo el código fuente del frontend al contenedor
COPY . .

# Exposición del puerto
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
