const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'live_lecture_23_1',
  port: 3306,
});

const main = async () => {
  const [result, columnDescription] = await connection.execute(
    'SELECT * FROM live_lecture_23_1.characters;',
  );

  console.log(result);
};

main();
