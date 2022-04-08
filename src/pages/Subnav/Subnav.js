import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import charecter from "../../assets/charecter.png";
import item from "../../assets/item.png";
import land from "../../assets/land.png";
const Subnav = () => {
  return (
    <Navbar className="subnav1"  >
      <Nav >
        <Nav.Link
          href="#home"
          className="d-flex gap-2"

        >
          <img style={{ height: '14px' }} src={item} alt="" /> <h6 style={{ fontSize: '12px' }} className="text-white">ITEMS</h6>
        </Nav.Link>
        <Nav.Link
          href="#home"
          className="d-flex gap-2"
        >
          <img style={{ height: '14px' }} src={charecter} alt="" />{" "}
          <h6 style={{ fontSize: '12px' }} className="text-white">charecter</h6>
        </Nav.Link>
        <Nav.Link
          href="#home"
          className="d-flex gap-2"
        >
          <img style={{ height: '14px' }} src={land} alt="" /> <h6 style={{ fontSize: '12px' }} className="text-white">land</h6>
        </Nav.Link>
      </Nav>
    </Navbar >

  );
};

export default Subnav;
