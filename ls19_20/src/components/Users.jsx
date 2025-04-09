import { useEffect, useState } from "react";
import { getUsers, getUserById } from "../api/users.api";
import { UserDetails } from "./UserDetails";

export function Users() {
  const [users, setUsers] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const toggleDetails = async (id) => {
    const isVisible = detailsVisible[id];

    if (!isVisible && !userDetails[id]) {
      const res = await getUserById(id);
      setUserDetails((prev) => ({ ...prev, [id]: res.data }));
    }

    setDetailsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #aaa",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <strong>{user.name}</strong>{" "}
          <button onClick={() => toggleDetails(user.id)}>
            {detailsVisible[user.id] ? "Hide Details" : "Show Details"}
          </button>

          {detailsVisible[user.id] && userDetails[user.id] && (
            <UserDetails user={userDetails[user.id]} />
          )}
        </div>
      ))}
    </div>
  );
}
