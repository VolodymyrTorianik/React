import { useEffect, useState } from "react";
import { getComments, getCommentById } from "../api/comments.api";
import { CommentDetails } from "./CommentDetails";

export function Comments() {
  const [comments, setComments] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});
  const [commentDetails, setCommentDetails] = useState({});

  useEffect(() => {
    getComments().then((res) => setComments(res.data.slice(0, 20))); 
  }, []);

  const toggleDetails = async (id) => {
    const isVisible = detailsVisible[id];

    if (!isVisible && !commentDetails[id]) {
      const res = await getCommentById(id);
      setCommentDetails((prev) => ({ ...prev, [id]: res.data }));
    }

    setDetailsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <strong>{comment.name}</strong>{" "}
          <button onClick={() => toggleDetails(comment.id)}>
            {detailsVisible[comment.id] ? "Hide Details" : "Show Details"}
          </button>

          {detailsVisible[comment.id] && commentDetails[comment.id] && (
            <CommentDetails comment={commentDetails[comment.id]} />
          )}
        </div>
      ))}
    </div>
  );
}
