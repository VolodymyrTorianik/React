import { Link } from "react-router-dom";

export function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Ласкаво просимо на головну сторінку!</h1>
      <p>Тут ви можете переглядати користувачів, пости та коментарі.</p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/users">Переглянути користувачів</Link></li>
          <li><Link to="/posts">Переглянути пости</Link></li>
          <li><Link to="/comments">Переглянути коментарі</Link></li>
          <li><Link to="/forms">Перейти до форми</Link></li>
        </ul>
      </nav>
    </div>
  );
}


