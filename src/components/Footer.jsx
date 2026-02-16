import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  const footerStyle = {
    padding: "40px 0 20px",
    textAlign: "center",
    background: darkMode 
      ? "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)"
      : "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
    color: darkMode ? "white" : "black",
    marginTop: "80px",
    borderTop: darkMode
      ? "1px solid rgba(102, 126, 234, 0.2)"
      : "1px solid rgba(102, 126, 234, 0.1)",
    transition: "all 0.3s ease"
  };

  const contentStyle = {
    fontSize: "0.95rem",
    letterSpacing: "0.3px"
  };

  const linkStyle = {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
    marginTop: "15px",
    display: "inline-block"
  };

  const copyrightStyle = {
    color: darkMode ? "#888" : "#999",
    fontSize: "0.85rem",
    marginTop: "30px",
    paddingTop: "20px",
    borderTop: darkMode
      ? "1px solid rgba(102, 126, 234, 0.1)"
      : "1px solid rgba(102, 126, 234, 0.05)"
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            
            <div style={contentStyle}>
              <p style={{ lineHeight: "1.8", color: darkMode ? "#bbb" : "#666" }}>
                Enlaces de contacto
              </p>
            </div>
            <div>
              <a
                href="https://github.com/AndresRuggieroGitHub"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.textShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.textShadow = "none";
                }}
              >
                🔗 GitHub
              </a>
              <span style={{ margin: "0 20px", color: darkMode ? "#666" : "#ccc" }}>|</span>
              <a
                href="https://linkedin.com/in/andresruggiero"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.textShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.textShadow = "none";
                }}
              >
                💼 LinkedIn
              </a>
            </div>
            <div style={copyrightStyle}>
              © 2026 Todos los derechos reservados.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
