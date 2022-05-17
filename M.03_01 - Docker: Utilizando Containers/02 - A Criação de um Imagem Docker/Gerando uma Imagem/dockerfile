FROM nginx
WORKDIR /usr/share/nginx/html
COPY ["./index.html", "/usr/share/nginx/html"]
EXPOSE 3000
# Variáveis de ambientes (Para utilizar dentro dos nossos container):
ENV API_URL=http://localhost:8000/api/
RUN ls
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]