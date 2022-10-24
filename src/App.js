import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ContactForm from "./components/ContactForm";
import MobileMenu from "./components/MobileMenu";
import "./App.css";

function App() {
  const [menuActive, setMenuActive] = useState();
  const items = [
    { value: "Home", href: "/home" },
    { value: "What we do", href: "/whatwedo" },
    { value: "About us", href: "/aboutus" },
    { value: "Our history", href: "/history" },
    { value: "Contact us", href: "/contact" },
  ];

  const services = [
    { value: "Training and implementation", href: "/training" },
    { value: "Cybeer Consultants", href: "/consultants" },
    { value: "Consultancy and brand protection", href: "/protection" },
    { value: "Software", href: "/software" },
  ];
  return (
    <div className="App">
      <div className="burger" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <MobileMenu
        active={menuActive}
        setActive={setMenuActive}
        items={items}
        services={services}
      />
      <Header />
      <MainContent />
      <ContactForm />
    </div>
  );
}

export default App;
