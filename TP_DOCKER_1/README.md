
#__1. Exécuter un serveur apache__
- A.Image httpd
```bash
docker pull httpd:latest
```

- B.Vérification image
```bash
docker images
```
- C.Lancement apache avec index.html
```bash
sudo docker run -d -p 8080:80 --name hello_world_httpd -v /home/kali/Documents/TP_Docker/TP_DOCKER_1/html/index>
```
- D.Suppression du container
```bash
docker stop mon_conteneur_httpd  # Arrêter le conteneur s'il est en cours d'exécution
docker rm mon_conteneur_httpd    # Supprimer le conteneur
```

#__2. Exécuter dockerfile__
- A. Exécution apache avec dockerfile

