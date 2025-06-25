import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestForm = () => {
  const [masters, setMasters] = useState([]);
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    master_id: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/masters")
      .then((res) => setMasters(res.data))
      .catch(() => setError("Помилка завантаження майстрів"));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { customer, email, master_id, description } = formData;


    if (!customer || !email || !master_id || !description) {
      setError("Будь ласка, заповніть всі поля");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/requests", formData);
      setSuccess("Заявку успішно створено");
      setFormData({
        customer: "",
        email: "",
        master_id: "",
        description: "",
      });
    } catch (err) {
      setError("Помилка при створенні заявки");
    }
  };

  return (
    <div>
      <h3>Залишити заявку</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Імʼя:</label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Обрана послуга:</label>
          <select
            name="master_id"
            value={formData.master_id}
            onChange={handleChange}
          >
            <option value="">Оберіть майстра</option>
            {masters.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} — {m.category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Опис проблеми:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Відправити заявку</button>
      </form>
    </div>
  );
};

export default RequestForm;
