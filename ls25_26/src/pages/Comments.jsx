import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../service";

export  function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Помилка при завантаженні коментарів:", err));
  }, []);

  return (
    <div>
      <h2>Список коментарів</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((comment) => (
          <li key={comment.id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.body}</p>
            <Link to={`/comment/${comment.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
