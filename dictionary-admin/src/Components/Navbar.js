import React from "react";
import { Navbar as Nb, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nb
      collapseOnSelect
      expand="sm"
      bg="white"
      variant="light"
      className="border-bottom shadow"
    >
      <div className="container-fluid">
        <Nb.Brand href="/">Dictionary App for IT</Nb.Brand>
        <Nb.Toggle aria-controls="responsive-navbar-nav" />
        <Nb.Collapse
          id="responsive-navbar-nav"
          className="d-sm-inline-flex justify-content-between"
        >
          <Nav className="mr-auto flex-grow-1">
            <Nav.Item>
              <Link to="/" className="nav-link text-dark">
                Trang chủ
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link text-dark">
                Giới thiệu
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link text-dark">
                Liên hệ
              </Link>
            </Nav.Item>
          </Nav>
        </Nb.Collapse>
      </div>
    </Nb>
  );
};
export default Navbar;
