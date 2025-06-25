import React from "react";
import { Link } from "react-router-dom";
import MasterList from "../components/MasterList";
import RequestForm from "../components/RequestForm";

const Home = () => (
  <div>
    <h1>Головна сторінка</h1>
    <nav>
      <p><Link to="/my-requests">Мої заявки</Link></p>
      <p><Link to="/admin">Адмінпанель</Link></p>
    </nav>

    <MasterList />
    <hr />
    <RequestForm />
  </div>
);

export default Home;
