const db = require("../db/db");
const { v4: uuidv4 } = require("uuid");

const createRequest = async (req, res) => {
  const { customer, email, master_id, description } = req.body;

  if (!customer || !email || !master_id || !description) {
    return res.status(400).json({ error: "Усі поля обов'язкові" });
  }

  try {
    const id = uuidv4();
    const query = `
      INSERT INTO requests (id, customer, email, master_id, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
    const values = [id, customer, email, master_id, description];
    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при створенні заявки" });
  }
};

const getRequestsByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const result = await db.query(`
      SELECT r.*, m.name AS master_name, m.category
      FROM requests r
      JOIN masters m ON r.master_id = m.id
      WHERE r.email = $1
      ORDER BY r.created_at DESC
    `, [email]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при отриманні заявок" });
  }
};

const deleteRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM requests WHERE id = $1", [id]);
    res.json({ message: "Заявку скасовано" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при скасуванні заявки" });
  }
};

module.exports = { createRequest, getRequestsByEmail, deleteRequest };
