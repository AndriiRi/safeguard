import React from "react";
import "./styles/MainContent.css";
import { ReactComponent as MoonMan } from "./picture/moonman.svg";
import { ReactComponent as Scroll } from "./picture/scroll.svg";
import WhiteButton from "./buttons/WhiteButton";
import { Link } from "react-scroll";
const MainContent = () => {
  return (
    <div className="container">
      <div className="Wraper">
        <div className="infoContent">
          <h1>Never Caught Off-Guard Again</h1>
          <p>
            We are specialist in protecting your assets and reputation to make
            sure you operate risk-free and focus on your core business.
          </p>
          <WhiteButton>Learn More</WhiteButton>
          <p className="scroll">
            <button style={{ margin: "0px" }}>
              <Link
                to="formContainer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Scroll />
              </Link>
            </button>
          </p>
        </div>
        <div className="mainPicture">
          <MoonMan />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
