import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../service";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Помилка:", err));
  }, []);

  return (
    <div>
      <h2>Список юзерів</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>Детальніше</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


