const connection = require('./connection');

const getAll = async () => {
  const request = `SELECT
    id as saleId, date, product_id as productId, quantity
    FROM StoreManager.sales AS param1
    INNER JOIN StoreManager.sales_products AS param2
    ON param1.id = param2.sale_id
    ORDER BY sale_id, product_id;`;
  
  const [result] = await connection.execute(request);
  return result;
};

const getById = async (id) => {
  const request = `SELECT
    date, product_id as productId, quantity
    FROM StoreManager.sales AS param1
    INNER JOIN StoreManager.sales_products AS param2
    ON param1.id = param2.sale_id
    WHERE id = ?
    ORDER BY sale_id, product_id;`;
  
  const [result] = await connection.execute(request, [id]);

  if (result.length === 0) return null;
  return result;
};

const create = async (param) => {
  const requests = [
    'INSERT INTO sales (date) VALUES (now());',
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    'SELECT id FROM StoreManager.products order by id desc limit 1;',
  ];

  await Promise.all(param.map(async (element) => {
    const [result] = await connection.execute(requests[0]);
    await connection.execute(requests[1], [result.insertId, element.productId, element.quantity]);
  }));

  const [idBigger] = await connection.execute(requests[2]);
  const aId = Object.values(idBigger);
  
  return { id: Object.values(aId[0])[0], itemsSold: param,
};
};

const update = async (id, reqBody) => {
  const request = `UPDATE StoreManager.sales_products
    SET quantity = ? WHERE sale_id = ? AND product_id = ?;`;

  await Promise.all(reqBody.map(async (element) => {
    await connection.execute(request, [element.quantity, id, element.productId]);
  }));

  return { saleId: id, itemsUpdated: reqBody };
};

const remove = async (id) => {
  const requests = [
    'DELETE FROM StoreManager.sales WHERE id = ?;',
    'DELETE FROM StoreManager.sales_products WHERE sale_id = ?;',
  ];

  await connection.execute(requests[0], [id]);
  await connection.execute(requests[1], [id]);

  return true;
};

module.exports = { getAll, getById, create, update, remove };