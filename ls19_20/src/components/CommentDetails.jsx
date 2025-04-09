export function CommentDetails({ comment }) {
    return (
      <div style={{ paddingLeft: "20px", color: "#444" }}>
        <p><strong>Email:</strong> {comment.email}</p>
        <p><strong>Body:</strong> {comment.body}</p>
      </div>
    );
  }
  