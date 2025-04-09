import { useEffect, useState } from "react";
import { getPosts, getPostById } from "../api/posts.api";
import { PostDetails } from "./PostDetails";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  const toggleDetails = async (id) => {
    const isVisible = detailsVisible[id];

    if (!isVisible && !postDetails[id]) {
      const res = await getPostById(id);
      setPostDetails((prev) => ({ ...prev, [id]: res.data }));
    }

    setDetailsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "2px solid green",
          }}
        >
          <strong>{post.id}. {post.title}</strong>{" "}
          <button onClick={() => toggleDetails(post.id)}>
            {detailsVisible[post.id] ? "Hide Details" : "Show Details"}
          </button>

          {detailsVisible[post.id] && postDetails[post.id] && (
            <PostDetails post={postDetails[post.id]} />
          )}
        </div>
      ))}
    </div>
  );
}
