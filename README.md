# PROYECTO NEXT.JS

# Instalaciones
apt install nodejs
apt install npm
npm install

# instalacion post
apt install nginx -y
npm run build

# Ejecucion
npm run dev o npm run start

# Actualizar e instalar docker en ubuntu
* sudo apt upgrade -y
* sudo apt install -y ca-certificates curl gnupg
* sudo install -m 0755 -d /etc/apt/keyrings
* curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
* sudo chmod a+r /etc/apt/keyrings/docker.gpg
* echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release; echo "$VERSION_CODENAME") stable" | \
* sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

* sudo apt update
* sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
* sudo docker --version
* sudo docker compose version

# isntalar nginx
* apt install nginx
* sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
* sudo nginx -t      # comprobar que la config es válida
* sudo systemctl reload nginx

# Docker levantar la imagen
docker compose down
docker compose up -d --build