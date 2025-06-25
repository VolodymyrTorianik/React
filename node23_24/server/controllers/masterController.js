const db = require("../db/db");

const getAllMasters = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM masters");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера при отриманні майстрів" });
  }
};

module.exports = { getAllMasters };