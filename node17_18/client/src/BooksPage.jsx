import React, { useEffect, useState } from "react";

const PAGE_SIZE = 5;

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    rating: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const totalPages = Math.ceil(books.length / PAGE_SIZE);


  const fetchBooks = () => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Помилка завантаження:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const openAddModal = () => {
    setFormData({ title: "", author: "", year: "", rating: "" });
    setIsEditing(false);
    setEditId(null);
    setModalOpen(true);
  };

  const openEditModal = (book) => {
    setFormData(book);
    setIsEditing(true);
    setEditId(book.id);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, year, rating } = formData;

    if (!title || !author || !year || !rating) {
      alert("Усі поля обов'язкові!");
      return;
    }

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:3000/books/${editId}`
      : "http://localhost:3000/books";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        year: Number(year),
        rating: Number(rating),
      }),
    })
      .then(() => {
        setModalOpen(false);
        fetchBooks();
      })
      .catch((err) => console.error("Помилка оновлення:", err));
  };


  const handleDelete = (id) => {
    if (!window.confirm("Ви впевнені, що хочете видалити цю книгу?")) return;

    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then(() => {

        const isLastItemOnPage = (books.length - 1) % PAGE_SIZE === 0;
        if (isLastItemOnPage && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        fetchBooks();
      })
      .catch((err) => console.error("Помилка видалення:", err));
  };

  const currentBooks = books.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Library Hub</h1>

      <button onClick={openAddModal}>+ Додати книгу</button>

      <table border="1" cellPadding="8" style={{ marginTop: 20, width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Автор</th>
            <th>Рік</th>
            <th>Рейтинг</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Книги відсутні
              </td>
            </tr>
          )}
          {currentBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.rating}</td>
              <td>
                <button onClick={() => openEditModal(book)}>Редагувати</button>{" "}
                <button onClick={() => handleDelete(book.id)} style={{ marginLeft: 8, color: 'red' }}>
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 20 }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          ⬅️ Попередня
        </button>
        <span style={{ margin: "0 10px" }}>
          Сторінка {currentPage} з {totalPages || 1}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages || totalPages === 0}>
          Наступна ➡️
        </button>
      </div>

      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 8,
              minWidth: 300,
              boxShadow: "0 0 10px rgba(0,0,0,0.25)",
            }}
          >
            <h2>{isEditing ? "Редагувати книгу" : "Додати книгу"}</h2>
            <input 
              type="text"
              name="title"
              placeholder="Назва"
              value={formData.title}
              onChange={handleInputChange}
              required
              style={{ width: "100%", marginBottom: 10 }}
            />
            <input
              type="text"
              name="author"
              placeholder="Автор"
              value={formData.author}
              onChange={handleInputChange}
              required
              style={{ width: "100%", marginBottom: 10 }}
            />
            <input
              type="number"
              name="year"
              placeholder="Рік"
              value={formData.year}
              onChange={handleInputChange}
              required
              style={{ width: "100%", marginBottom: 10 }}
            />
            <input
              type="number"
              name="rating"
              placeholder="Рейтинг (1-5)"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleInputChange}
              required
              style={{ width: "100%", marginBottom: 10 }}
            />

            <button type="submit" style={{ marginRight: 10 }}>
              Зберегти
            </button>
            <button type="button" onClick={() => setModalOpen(false)}>
              Скасувати
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
