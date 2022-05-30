## Startando Aplicação Manualmente
1. npm install
2. docker run --name app-to-do-list -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:5
3. cd backend
4. npm run db
5. cd ..
6. npm start

## Com Docker Compose