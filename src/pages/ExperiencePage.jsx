import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function ExperiencePage() {
  const { darkMode } = useContext(ThemeContext);

  const sectionStyle = {
    marginBottom: "50px"
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
    letterSpacing: "-0.5px",
    position: "relative",
    paddingBottom: "15px"
  };

  const sectionTitleBorder = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "2px"
  };

  const cardStyle = {
    border: "none",
    borderRadius: "12px",
    background: darkMode ? "#2c2c2c" : "#fff",
    color: darkMode ? "white" : "black",
    marginBottom: "20px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderLeft: "4px solid #667eea",
    boxShadow: darkMode ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.08)"
  };

  const cardHoverStyle = {
    transform: "translateX(8px)",
    boxShadow: darkMode ? "0 8px 24px rgba(102, 126, 234, 0.3)" : "0 8px 24px rgba(102, 126, 234, 0.2)"
  };

  const timelineItemStyle = {
    paddingLeft: "30px",
    position: "relative"
  };

  const timelineDotsStyle = {
    position: "absolute",
    left: "0",
    top: "8px",
    width: "16px",
    height: "16px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "50%",
    border: "3px solid",
    borderColor: darkMode ? "#222" : "#f8f9fa"
  };

  const itemTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#667eea",
    letterSpacing: "-0.3px"
  };

  const itemSubtitleStyle = {
    fontSize: "0.95rem",
    color: darkMode ? "#aaa" : "#666",
    marginBottom: "10px",
    fontWeight: "500"
  };

  const itemDateStyle = {
    fontSize: "0.85rem",
    color: darkMode ? "#888" : "#999",
    marginBottom: "12px",
    fontFamily: "monospace",
    letterSpacing: "0.2px"
  };

  const itemDetailStyle = {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: darkMode ? "#bbb" : "#555"
  };

  const ExperienceCard = ({ title, subtitle, date, details }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <Card 
        style={{
          ...cardStyle,
          ...(isHovered ? cardHoverStyle : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Body style={timelineItemStyle}>
          <div style={timelineDotsStyle}></div>
          <Card.Title style={itemTitleStyle}>{title}</Card.Title>
          <Card.Subtitle style={itemSubtitleStyle}>{subtitle}</Card.Subtitle>
          <div style={itemDateStyle}>📅 {date}</div>
          <Card.Text style={itemDetailStyle}>{details}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container style={{ minHeight: "calc(100vh - 255px)", paddingY: "40px", marginTop: "40px", marginBottom: "40px" }}>

      {/* FORMACIÓN */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          Formación
          <div style={sectionTitleBorder}></div>
        </h2>
        <Row>
          <Col md={8}>
            <ExperienceCard
              title="DAW"
              subtitle="Desarrollo de Aplicaciones Web"
              date="Septiembre 2025 - Actualidad"
              details="I.E.S Al-Andalus, Almería"
            />
            <ExperienceCard
              title="DAM"
              subtitle="Desarrollo de Aplicaciones Multiplataforma"
              date="Septiembre 2022 - Junio 2025"
              details="I.E.S Al-Andalus, Almería"
            />
          </Col>
        </Row>
      </div>

      {/* CERTIFICACIONES */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          Certificaciones
          <div style={sectionTitleBorder}></div>
        </h2>
        <Row>
          <Col md={8}>
            <ExperienceCard
              title="Introducción a IA Generativa"
              subtitle="Escuela Superior de Ingeniería"
              date="Noviembre 2025"
              details="Universidad de Almería (UAL)"
            />
            <ExperienceCard
              title="Fundamentos de IA"
              subtitle="Escuela Superior de Ingeniería"
              date="Octubre 2025"
              details="Universidad de Almería (UAL)"
            />
            <ExperienceCard
              title="NDG Linux Essentials"
              subtitle="Cisco Networking Academy"
              date="Junio 2023"
              details="Certificación de fundamentos de Linux"
            />
          </Col>
        </Row>
      </div>

      {/* EXPERIENCIA LABORAL */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          Experiencia Laboral
          <div style={sectionTitleBorder}></div>
        </h2>
        <Row>
          <Col md={8}>
            <ExperienceCard
              title="Desarrollador de Aplicaciones Móviles"
              subtitle="Arcadebits"
              date="Marzo 2025 - Junio 2025"
              details="Desarrollé una aplicación móvil Android con Firebase. Catálogo de productos y sistema de ventas."
            />
            <ExperienceCard
              title="Experiencia Previa en Diversos Sectores"
              subtitle="Múltiples empleadores"
              date="Enero 2015 - Junio 2025"
              details="Camarero, socorrista, mantenimiento industrial, carpintero metalico, limpieza de edificios, y comercial de ventas."
            />
          </Col>
        </Row>
      </div>

      {/* VOLUNTARIADO */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          Voluntariado
          <div style={sectionTitleBorder}></div>
        </h2>
        <Row>
          <Col md={8}>
            <ExperienceCard
              title="Voluntario ESN Almería"
              subtitle="Erasmus Student Network"
              date="Septiembre 2022 - Diciembre 2025"
              details="Participé en ESN, asociación dirigida a facilitar la integración  social  
y cultural de estudiantes de intercambio."
            />
            <ExperienceCard
              title="Voluntario Cruz Roja"
              subtitle="Cruz Roja Española"
              date="Junio 2023 - Diciembre 2025"
              details="Colaboré con Cruz Roja en un proyecto de inclusión digital"
            />
          </Col>
        </Row>
      </div>

    </Container>
  );
}

export default ExperiencePage;
