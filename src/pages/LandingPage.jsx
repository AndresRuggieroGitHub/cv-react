import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function LandingPage() {
  const { darkMode } = useContext(ThemeContext);
  
  const heroStyle = {
    background: darkMode 
      ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)" 
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "20px",
    padding: "60px 30px",
    margin: "40px 0 60px",
    boxShadow: darkMode
      ? "0 10px 40px rgba(255, 255, 255, 0.1)"
      : "0 10px 40px rgba(0, 0, 0, 0.15)",
    color: "white",
    position: "relative",
    overflow: "hidden"
  };

  const profileImgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "30px",
    border: "6px solid white",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
    animation: "slideInDown 0.6s ease"
  };

  const titleStyle = {
    fontSize: "3rem",
    marginBottom: "10px",
    fontWeight: "700",
    letterSpacing: "-1px",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
  };

  const subtitleStyle = {
    fontSize: "1.3rem",
    marginBottom: "30px",
    opacity: 0.95,
    fontWeight: "500",
    letterSpacing: "0.5px"
  };

  const buttonStyle = {
    padding: "12px 28px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "2px solid white",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontSize: "0.9rem",
    margin: "0 12px"
  };

  const skillBadgeContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px"
  };

  const skillBadgeStyle = {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "0.85rem",
    letterSpacing: "0.3px",
    background: darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(102, 126, 234, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    color: darkMode ? "white" : "#333",
    transition: "all 0.3s ease",
    cursor: "default"
  };

  const aboutStyle = {
    background: darkMode ? "rgba(42, 82, 152, 0.3)" : "rgba(102, 126, 234, 0.1)",
    padding: "40px",
    borderRadius: "15px",
    marginTop: "40px",
    lineHeight: "1.8",
    fontSize: "1.05rem"
  };
  
  return (
    <Container style={{ marginBottom: "40px" }}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <img 
              src="/images/profile.png" 
              alt="Foto de perfil"
              style={profileImgStyle}
            />
            <h1 style={titleStyle}>Andrés Ruggiero</h1>
            <p style={subtitleStyle}>Desarrollador Junior</p>

            {/* Botones */}
            <div style={{ marginBottom: "20px" }}>
              <Button
                href="https://github.com/AndresRuggieroGitHub"
                target="_blank"
                style={{
                  ...buttonStyle,
                  background: "white",
                  color: "#667eea"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.9)";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                GitHub
              </Button>
              <Button
                href="https://linkedin.com/in/andresruggiero"
                target="_blank"
                style={{
                  ...buttonStyle,
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.3)";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Sobre mí */}
      <Row className="mt-5">
        <Col md={{ span: 8, offset: 2 }}>
          <div style={aboutStyle}>
            <p>
              Titulado en DAM y estudiante de DAW, con experiencia en desarrollo 
              de software con diversas herramientas. Me apasiona la creación 
              de aplicaciones usables y eficientes, y busco seguir creciendo profesionalmente en el sector tecnológico.
            </p>
          </div>
        </Col>
      </Row>

      {/* Habilidades */}
      <Row className="mt-5">
        <Col className="text-center">
          <h3 style={{ marginBottom: "30px", fontWeight: "700" }}>Habilidades</h3>
          <div style={skillBadgeContainerStyle}>
            {["Desarrollo Web", "Desarrollo Móvil", "Desarrollo de Escritorio", "Bases de Datos"].map((skill, i) => (
              <div
                key={i}
                style={skillBadgeStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(102, 126, 234, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(102, 126, 234, 0.1)";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
