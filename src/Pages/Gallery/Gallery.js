import "./Gallery.scss";
import BotonMasC from "../../Components/BotonesGallery/BotonMas.js";
import imagenes from "../../Data/Gallery/imagenes.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Container, Carousel, Button } from "react-bootstrap";
import { useState } from "react";

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ height: "100%", overflow: "none" }}>
      <Container fluid className="contenedor">
        <Row style={{ height: "100%" }}>
          {/* Columna Roja */}
          <Col
            className="bg-danger"
            style={{ height: "100%", paddingLeft: 0, paddingRight: 0 }}
            lg={5}
            xs={12}
          >
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  src={imagenes.foto1}
                  alt="Los Angeles"
                  class="w-100"
                  style={{ height: "" }}
                />
                <Carousel.Caption>
                  <Button variant="secondary" className="custom-button">
                    Ver más
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagenes.foto1} alt="Los Angeles" class="w-100" />
                <Carousel.Caption>
                  <Button
                    variant="secondary"
                    className="custom-button"
                    style={{ textAlign: "center" }}
                  >
                    Ver más
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imagenes.foto1} alt="Los Angeles" class="w-100" />
                <Carousel.Caption>
                  <Button variant="secondary" className="custom-button">
                    Ver más
                  </Button>{" "}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* Aqui Cierra el Carrousel  */}
          </Col>
          {/* Columna Blanca */}
          <Col className="bg-white" lg={7} xs={12}>
            <Row
              xs={12}
              className="fila"
              class="w-100 img-fluid"
              style={{ height: "100%" }}
            >
              {/* Primera Fila */}
              <Col xs={12} md={4} className="caja">
                <BotonMasC
                  imgSrc={imagenes.botonMas} // Ruta de la imagen normal
                  imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
                  // Pasa la función del clic con el identificador de la imagen
                />
                <img src={imagenes.foto1} alt="Foto 1" className="foto" />
              </Col>
              {/* Segunda Fila */}
              <Col xs={12} md={4} className="caja ">
                <img src={imagenes.foto2} alt="Foto 2" className="foto" />
              </Col>
              {/* Tercera Fila */}
              <Col xs={12} md={4} className="caja ">
                <BotonMasC
                  imgSrc={imagenes.botonMas} // Ruta de la imagen normal
                  imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
                  // Pasa la función del clic con el identificador de la imagen
                />
                <img src={imagenes.foto3} alt="Foto 3" className="foto" />
              </Col>
              {/* Cuarta Fila */}
              <Col xs={12} md={4} className="caja">
                <img src={imagenes.foto4} alt="Foto 4" className="foto" />
              </Col>
              {/* Quinta Fila */}
              <Col xs={12} md={4} className="caja">
                <BotonMasC
                  imgSrc={imagenes.botonMas} // Ruta de la imagen normal
                  imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
                  // Pasa la función del clic con el identificador de la imagen
                />
                <img src={imagenes.foto5} alt="Foto 5" className="foto" />
              </Col>
              {/* Sexta Fila */}
              <Col xs={12} md={4} className="caja">
                <img src={imagenes.foto6} alt="Foto 6" className="foto" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
