# Использование последней версии Node.js
FROM node:lts
# Задаётся рабочая директория в контейнере
WORKDIR /app
# Копируются package.json и package-lock.json
COPY package*.json ./
# Установка зависимостей
RUN npm ci --verbose  --only=production --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000 --timeout=600000
# Копирование всех файлов из локального каталога в контейнер
COPY . .
# Открывает порт 3000 в контейнере (порт React по умолчанию).
EXPOSE 3000
# Сообщает Docker о необходимости запуска npm start при запуске контейнера
CMD ["npm", "start"]
