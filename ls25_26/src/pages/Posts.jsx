import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../service";

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Помилка при завантаженні постів:", err));
  }, []);

  return (
    <div>
      <h2>Список постів</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}