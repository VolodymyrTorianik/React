import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../service";

export function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Помилка при завантаженні:", err));
  }, [id]);

  if (!user) {
    return <div>Завантаження...</div>;
  }

  return (
    <div>
      <h2>Деталі користувача</h2>
      <p><strong>Ім'я:</strong> {user.name}</p>
      <p><strong>Електронна пошта:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Сайт:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Компанія:</strong> {user.company.name}</p>
      <p><strong>Адреса:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
}
