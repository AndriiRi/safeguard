import "./styles/header.css";
import { ReactComponent as Logo } from "./picture/mainLogo.svg";
import WhiteButton from "./buttons/WhiteButton.jsx";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header>
      <div className="logoPlace">
        <Logo />
      </div>
      <div className="infoPlace">
        <button>Home</button>
        <button>About Us</button>
        <button>What We Do</button>
        <WhiteButton>
          <Link
            to="formContainer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Link>
        </WhiteButton>
      </div>
    </header>
  );
};

export default Header;
