# Création dossier TP_DOCKER_2
# 1.Récupération du code
Dans /src/

# 2. Création d'un dockerfile pour node.js

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD["node","src/index.js"]
EXPOSE 3000
```
- Puis lancer les commandes suivantes :
```bash
docker build -t node_docker .
docker run -dp 3000:3000 node_docker
```

