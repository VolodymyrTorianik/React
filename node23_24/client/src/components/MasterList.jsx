import { useEffect, useState } from "react";
import axios from "axios";

const MasterList = () => {
  const [masters, setMasters] = useState([]);
  const [filteredMasters, setFilteredMasters] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/masters")
      .then((res) => {
        setMasters(res.data);
        setFilteredMasters(res.data);
      })
      .catch((err) => {
        console.error("Помилка отримання майстрів:", err);
      });
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    setCategory(value);

    if (!value) {
      setFilteredMasters(masters);
    } else {
      const filtered = masters.filter((m) =>
        m.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMasters(filtered);
    }
  };

  return (
    <div>
      <h2>Список майстрів</h2>

      <label>
        Фільтр за категорією:
        <input
          type="text"
          value={category}
          onChange={handleFilter}
          placeholder="Напр. електрик"
        />
      </label>

      <ul>
        {filteredMasters.length > 0 ? (
          filteredMasters.map((m) => (
            <li key={m.id}>
              <strong>{m.name}</strong> — {m.category}
            </li>
          ))
        ) : (
          <p>Майстрів не знайдено</p>
        )}
      </ul>
    </div>
  );
};

export default MasterList;
