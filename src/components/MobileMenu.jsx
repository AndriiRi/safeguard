import React from "react";
import "./styles/MobileMenu.css";
import { ReactComponent as Logo } from "./picture/mainLogo.svg";

const MobileMenu = ({ items, services, active, setActive }) => {
  return (
    <div className="mobileHeader">
      <Logo />
      <div className={active ? "mobileMenu active" : "mobileMenu"}>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>

        <p style={{ marginLeft: "30px" }}>Services</p>
        <ul>
          {services.map((service) => (
            <li>
              <a href={service.href}>{service.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
