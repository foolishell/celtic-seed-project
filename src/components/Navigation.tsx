import { Nav } from "react-bootstrap";
import mainLogoImg from "../image/mainLogo.png";

const Navigation = () => {
  return (
    <Nav
      className="fixed-top Navigation flex-column text-center"
      id="navigation"
    >
      <div className="p-3">
        <img src={mainLogoImg} className="rounded-circle w-100" />
      </div>
      <Nav.Link className="" href="#top">
        Top
      </Nav.Link>
      <Nav.Link className="" href="#about">
        About
      </Nav.Link>
      <Nav.Link className="" href="#schedule">
        Schedule
      </Nav.Link>
      <Nav.Link className="" href="#ticket">
        Ticket
      </Nav.Link>
      <Nav.Link className="" href="#artist">
        Artist
      </Nav.Link>
      <Nav.Link className="" href="#sponsor">
        Sponsor
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
