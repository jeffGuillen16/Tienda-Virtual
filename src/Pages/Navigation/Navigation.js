import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { navigation_data } from "../../Data/Navigation_data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons.js";

import "./Navigation.scss";
function Navigation() {
  const primeraImagen = navigation_data[0][0];

  return (
    <Navbar
      expand="lg"
      style={{
        position: "fixed",
        zIndex: "900",
        height: "60px",
        width: "100%",
      }}
    >
      <Container>
        <div className="brand-logo">
            <img
              src={primeraImagen.image}
              alt={`Imagen ${primeraImagen.id}`}
              width={"65px"}
              height={"65px"}
            />
          
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="my-custom-class">
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1">Poleras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gorros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bolsas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Tapabocas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ILUSTRADORES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Sonia Maria Cano
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Alfon U Riarte
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Cristobal Laguna
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Miguel Angel Ruiz
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COLECIONES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Colección Amor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Coleción Navideña
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Colección Hallowen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Colección Kawaii
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navItemsText" href="#link">
              NOSOTROS
            </Nav.Link>
            <div className="brand-icon">
              <div className="brand-buscador">
                <a className="icons" href="/">
                  <FontAwesomeIcon
                    icon={["fas", icons.MagnifyingGlass]}
                    size="lg"
                    className="brand-menu"
                    style={{ color: "#000", marginTop: "7px" }}
                  />
                </a>
              </div>
              <div className="brand-cart">
                <a className="icons" href="/">
                  <FontAwesomeIcon
                    icon={["fa", icons.faCartShopping]}
                    size="lg"
                    style={{ color: "#000", marginTop: "7px" }}
                  />
                </a>
              </div>
              <div className="icons-media">
                <div className="icon-container">
                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Facebook]}
                      size="lg"
                      style={{ color: "#000" }}
                    />
                  </a>
                </div>
                <div className="icon-container">
                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Instagram]}
                      size="lg"
                      style={{ color: "#000" }}
                    />
                  </a>
                </div>
                <div className="icon-container">
                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Tiktok]}
                      size="lg"
                      style={{ color: "#000" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;