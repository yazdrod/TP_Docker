# Création dossier TP_DOCKER_2
# 1.Récupération du code
Dans /src/

# 2. Création d'un dockerfile pour node.js

```dockerfile
FROM node:20-alpine
WORKDIR /app

COPY ./src ./
RUN npm install

CMD ["node","server.js"]
EXPOSE 3000
```
- Installation de "Dive" pour afficher des informations supplémentaires sur les images dockers.
```bash
$ docker pull wagoodman/dive   
```
- Lancement de la commande par un docker
```bash
$ docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock wagoodman/dive:latest node_docker
```

- Une fois le build ok éxécuter les commandes suivantes :
```bash
docker build -t node_docker .
docker run -dp 3000:3000 node_docker
```
![node](./node.png)

- Lancement docker mysql
```bash
$ docker run --name sql_docker -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

