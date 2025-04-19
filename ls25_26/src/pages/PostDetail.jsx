import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../service";

export  function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Помилка при завантаженні поста:", err));
  }, [id]);

  if (!post) {
    return <div>Завантаження...</div>;
  }

   return (
    <div>
      <h2>Деталі поста</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
