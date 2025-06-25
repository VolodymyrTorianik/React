import React, { useState } from "react";
import MyRequests from "../components/MyRequests";

const MyRequestsPage = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email.trim());
  };

  return (
    <div>
      <h1>Мої заявки</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Введіть свій email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Показати заявки</button>
      </form>

      <hr />

      {submittedEmail && <MyRequests email={submittedEmail} />}
    </div>
  );
};

export default MyRequestsPage;
