import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around", listStyle: "none", padding: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Головна</Link></li>
          <li><Link to="/users" style={{ color: "white", textDecoration: "none" }}>Користувачі</Link></li>
          <li><Link to="/posts" style={{ color: "white", textDecoration: "none" }}>Пости</Link></li>
          <li><Link to="/comments" style={{ color: "white", textDecoration: "none" }}>Коментарі</Link></li>
          <li><Link to="/forms" style={{ color: "white", textDecoration: "none" }}>Форма</Link></li>
        </ul>
      </nav>
    </header>
  );
}


