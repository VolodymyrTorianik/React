


export function PostDetails({ post }) {
    return (
      <div style={{ paddingLeft: "20px", color: "#444" }}>
        <p><strong>Title:</strong> {post.title}</p>
        <p><strong>Body:</strong> {post.body}</p>
      </div>
    );
  }
  