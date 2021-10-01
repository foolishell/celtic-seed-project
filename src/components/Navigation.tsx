import { Nav } from "react-bootstrap";
import mainLogoImg from "../image/mainLogo.png";

const Navigation = () => {
  return (
    <Nav
      className="fixed-top flex-column text-center d-none d-md-block h-100"
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
      <Nav.Link className="" href="#events">
        Events
      </Nav.Link>
      <Nav.Link className="" href="#tickets">
        Tickets
      </Nav.Link>
      <Nav.Link className="" href="#artists">
        Artists
      </Nav.Link>
      <Nav.Link className="" href="#supports">
        Supports
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
