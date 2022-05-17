FROM nginx                                
COPY ./index.html /usr/share/nginx/html   
EXPOSE 80                               
ENV API_URL=http://localhost:8000/api/    
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]

# docker build --tag docker-nginx .
# docker run --name exemplo -p 3000:80 -d docker-nginx