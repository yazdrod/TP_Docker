# TP_Docker_Ynov
# BOUR NICOLAS || B3 CYBER

__1. Exécuter un serveur apache__
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
sudo docker run -d -p 8080:80 --name hello_world_httpd -v /home/kali/Documents/TP_Docker/TP_DOCKER_1/html/index.html:/usr/local/apache2/htdocs/index.html httpd:latest
```
