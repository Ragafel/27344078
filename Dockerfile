
FROM ubuntu
ADD https://github.com/Ragafel/27344078.git /home/27344078/
run apt-get update -y
run apt-get upgrade -y
run apt-get install nano -y
run apt install net-tools
run apt-get install apache2 -y
run sed -i "s|/var/www/html|/home/27344078|g" /etc/apache2/sites-available/000-default.conf
run sed -i "s|Require all denied|Require all granted|g" /etc/apache2/apache2.conf