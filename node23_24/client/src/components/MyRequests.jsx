import React, { useState, useEffect } from "react";
import axios from "axios";

const MyRequests = ({ email }) => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/requests/${email}`);
      setRequests(res.data);
      setError("");
    } catch (err) {
      setError("Помилка при завантаженні заявок");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      fetchRequests();
    }
  }, [email]);

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/requests/${id}`);
      setRequests((prev) => prev.filter((req) => req.id !== id));
    } catch {
      setError("Помилка при скасуванні заявки");
    }
  };

  if (!email) return <p>Будь ласка, введіть свій email для перегляду заявок.</p>;

  if (loading) return <p>Завантаження заявок...</p>;

  return (
    <div>
      <h3>Мої заявки</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {requests.length === 0 ? (
        <p>Заявок немає</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Послуга</th>
              <th>Опис</th>
              <th>Статус</th>
              <th>Дата</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(({ id, master_name, description, status, created_at }) => (
              <tr key={id}>
                <td>{master_name}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{new Date(created_at).toLocaleString()}</td>
                <td>
                  {status === "нове" ? (
                    <button onClick={() => handleCancel(id)}>Скасувати</button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyRequests;
