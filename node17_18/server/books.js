import client from './db.js';

export async function getAllBooks() {
  const res = await client.query('SELECT * FROM books ORDER BY id');
  return res.rows;
}

export async function getBookById(id) {
  const res = await client.query('SELECT * FROM books WHERE id = $1', [id]);
  return res.rows[0];
}

export async function createBook({ title, author, year, rating }) {
  const res = await client.query(
    'INSERT INTO books (title, author, year, rating) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, author, year, rating]
  );
  return res.rows[0];
}

export async function updateBook(id, { title, author, year, rating }) {
  const res = await client.query(
    'UPDATE books SET title = $1, author = $2, year = $3, rating = $4 WHERE id = $5 RETURNING *',
    [title, author, year, rating, id]
  );
  return res.rows[0];
}

export async function deleteBook(id) {
  await client.query('DELETE FROM books WHERE id = $1', [id]);
}
