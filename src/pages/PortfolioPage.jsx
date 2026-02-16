import React, { useContext } from 'react';
import Projects from '../components/Projects';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function PortfolioPage() {
  const { darkMode } = useContext(ThemeContext);

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    letterSpacing: "-0.5px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: darkMode ? "#bbb" : "#666",
    lineHeight: "1.6"
  };

  return (
    <Container style={{ marginBottom: "60px" }}>
      <Row className="justify-content-center">
        <Col md={10} style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
          <h1 style={titleStyle}>Mis Proyectos</h1>
          <p style={subtitleStyle}>
            A continuación se muestran algunos de los proyectos en los que he trabajado.
          </p>
        </Col>
      </Row>

      <Projects />
    </Container>
  );
}

export default PortfolioPage;
