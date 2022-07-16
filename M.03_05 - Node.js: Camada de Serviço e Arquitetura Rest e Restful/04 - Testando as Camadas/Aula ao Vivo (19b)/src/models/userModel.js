const db = require('./db');

const userModel = {
  async list() {
    const sql = `
      select * 
      from user
    `;
    const [items] = await db.query(sql);
    return items;
  },

  async get(id) {
    const sql = `
      select * 
      from user 
      where id = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },

  async exists(id) {
    const sql = `
      select 1 
      from user 
      where id = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return !!item;
  },

  async existsByEmail(email) {
    const sql = `
      select 1 
      from user 
      where email = ?
    `;
    const [[item]] = await db.query(sql, [email]);
    return !!item;
  },

  async add(data) {
    const sql = `
      insert into user (name, email, password)
      values (?, ?, ?)
    `;
    const [{ insertId }] = await db
      .query(sql, [data.name, data.email, data.password]);
    return insertId;
  },

  async edit(id, changes) {
    const sql = `
      update user set ?
      where id = ?
    `;
    await db.query(sql, [changes, id]);
  },

  async remove(id) {
    const sql = `
      delete from user
      where id = ?
    `;
    await db.query(sql, [id]);
  },
};

module.exports = userModel;