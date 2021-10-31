FROM node

WORKDIR /app

COPY package*.json ./

# Install the good ol' NPM modules and get Adonis CLI in the game
RUN npm i -g @adonisjs/cli && npm i @adonisjs/ignitor
RUN npm i -g nodemon -D
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","start"]