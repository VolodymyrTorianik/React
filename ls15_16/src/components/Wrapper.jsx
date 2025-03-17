import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Content1 } from "../components/Content1";
import { Content2 } from "../components/Content2";
import { Footer } from "../components/Footer";

export function Wrapper() {
    return (
        <div>
            <Navbar />
            <hr />
            <h2>Компонент Content1</h2>
            <Content1/>
            <hr />
            <h2>Компонент Content2</h2>
            <Content2/>
            <hr />
            <h2>Footer</h2>
            <Footer />
        </div>
    )
}
