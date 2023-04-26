# Başlangıç imajımızı belirliyoruz
FROM nginx

# Çalışma dizinimizi belirliyoruz
WORKDIR /usr/share/nginx/html

# İlgili dosyaları kopyalıyoruz
COPY . .

# Bağlantı noktasını açıyoruz
EXPOSE 80

# Komutu belirliyoruz
CMD ["nginx", "-g", "daemon off;"]
