const db = require("../db/db");

const getAllRequests = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT r.*, m.name AS master_name, m.category
      FROM requests r
      JOIN masters m ON r.master_id = m.id
      ORDER BY r.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при отриманні всіх заявок" });
  }
};

const updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["нове", "в роботі", "завершено"].includes(status)) {
    return res.status(400).json({ error: "Недопустимий статус" });
  }

  try {
    const result = await db.query(`
      UPDATE requests SET status = $1 WHERE id = $2 RETURNING *
    `, [status, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Заявку не знайдено" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при оновленні статусу" });
  }
};

module.exports = { getAllRequests, updateRequestStatus };
