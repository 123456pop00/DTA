#!/bin/sh
set -e

HOST=${HOST:-0.0.0.0}

CONFDIR=/etc/nginx/conf
[ -d /etc/nginx/conf.d ] && CONFDIR=/etc/nginx/conf.d

cat <<EOF > $CONFDIR/default.conf
server {
  listen                80;
  server_name           $HOST;
  access_log            /dev/stdout;
  error_log             /dev/stderr;

  server_tokens         off;

  root /app;

  location / {
    try_files \$uri \$uri/ /index.html;
    add_header X-Frame-Options "DENY";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    add_header Content-Security-Policy "script-src 'self' 'unsafe-inline'";
    add_header Referrer-Policy "origin-when-cross-origin";
    add_header Feature-Policy "accelerometer 'none'; camera 'none'; geolocation 'none'; microphone 'none'";
    add_header X-Download-Options "noopen";
  }

  location /healthcheck {
    return 200 "healthy\n";
  }

  # Media: images, icons, video, audio, HTC
  location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|woff2)$ {
    expires 1M;
    access_log off;
    add_header Cache-Control "public";
  }

  # CSS and Javascript
  location ~* \.(?:css|js)$ {
    expires 1d;
    access_log off;
    add_header Cache-Control "public";
  }
}
EOF

# Starting nginx
exec nginx -g "daemon off;"