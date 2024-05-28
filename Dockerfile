
FROM ubuntu
copy ["index.html","perfil.html","/home/27344078/"] 
copy css /home/27344078/css/
copy docs /home/27344078/docs/
copy js /home/27344078/js/
copy reto5 /home/27344078/reto5/
run apt-get update -y
run apt-get upgrade -y
run apt-get install nano -y
run apt install net-tools
run apt-get install apache2 -y
run sed -i "s|/var/www/html|/home/27344078|g" /etc/apache2/sites-available/000-default.conf
run sed -i "s|Require all denied|Require all granted|g" /etc/apache2/apache2.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf