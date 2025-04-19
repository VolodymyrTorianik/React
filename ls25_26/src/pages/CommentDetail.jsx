import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../service";



export function CommentDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getCommentById(id)
      .then((res) => setComment(res.data))
      .catch((err) => console.error("Помилка при завантаженні коментаря:", err));
  }, [id]);

  if (!comment) {
    return <div>Завантаження...</div>;
  }
 
  return (
    <div>
      <h2>Деталі коментаря</h2>
      <p><strong>{comment.name}</strong></p>
      <p>{comment.body}</p>
    </div>
  );
}
