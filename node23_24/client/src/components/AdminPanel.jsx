import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/admin/requests");
      setRequests(res.data);
      setError("");
    } catch (err) {
      setError("Помилка при завантаженні заявок");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/admin/requests/${id}`, {
        status: newStatus,
      });
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: newStatus } : req
        )
      );
      setError("");
    } catch {
      setError("Помилка при оновленні статусу");
    }
  };

  if (loading) return <p>Завантаження заявок...</p>;

  return (
    <div>
      <h1>Адмінпанель — Заявки</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Клієнт</th>
            <th>Email</th>
            <th>Послуга</th>
            <th>Опис</th>
            <th>Статус</th>
            <th>Дата</th>
            <th>Змінити статус</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(
            ({
              id,
              customer,
              email,
              master_name,
              description,
              status,
              created_at,
            }) => (
              <tr key={id}>
                <td>{customer}</td>
                <td>{email}</td>
                <td>{master_name}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{new Date(created_at).toLocaleString()}</td>
                <td>
                  <select
                    value={status}
                    onChange={(e) => handleStatusChange(id, e.target.value)}
                  >
                    <option value="нове">нове</option>
                    <option value="в роботі">в роботі</option>
                    <option value="завершено">завершено</option>
                  </select>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
