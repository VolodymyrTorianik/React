import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Content1 } from "../components/Content1";
import { Content2 } from "../components/Content2";
import { Footer } from "../components/Footer";

export function Wrapper() {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div>
      <Navbar />
      <hr />
      
      <div>
        <button onClick={() => setShowContent1(!showContent1)}>
          {showContent1 ? "Сховати Content1" : "Показати Content1"}
        </button>
        {showContent1 && (
          <>
            <h2>Компонент Content1</h2>
            <Content1 />
          </>
        )}
      </div>

      <hr />
      
      <div>
        <button onClick={() => setShowContent2(!showContent2)}>
          {showContent2 ? "Сховати Content2" : "Показати Content2"}
        </button>
        {showContent2 && (
          <>
            <h2>Компонент Content2</h2>
            <Content2 />
          </>
        )}
      </div>

      <hr />
      
      <div>
        <button onClick={() => setShowFooter(!showFooter)}>
          {showFooter ? "Сховати Footer" : "Показати Footer"}
        </button>
        {showFooter && (
          <>
            <h2>Footer</h2>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
