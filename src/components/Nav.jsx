import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Navbar, Nav as NavBootstrap, Container, Button } from 'react-bootstrap';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import './Nav.css';

function Nav() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navbarStyle = {
    background: darkMode 
      ? "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)" 
      : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    boxShadow: darkMode
      ? "0 4px 12px rgba(0, 0, 0, 0.3)"
      : "0 4px 12px rgba(0, 0, 0, 0.08)",
    borderBottom: darkMode 
      ? "1px solid rgba(102, 126, 234, 0.2)"
      : "1px solid rgba(102, 126, 234, 0.1)",
    transition: "all 0.3s ease"
  };

  const linkStyle = {
    marginLeft: "20px",
    marginRight: "20px",
    position: "relative",
    fontWeight: "600",
    fontSize: "0.95rem",
    letterSpacing: "0.2px",
    transition: "all 0.3s ease",
    color: darkMode ? "#ccc" : "#333"
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#667eea"
  };

  const themeButtonStyle = {
    position: "absolute",
    right: "15px",
    borderRadius: "10px",
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    borderColor: darkMode ? "rgba(102, 126, 234, 0.5)" : "rgba(102, 126, 234, 0.3)",
    background: darkMode ? "rgba(102, 126, 234, 0.1)" : "rgba(102, 126, 234, 0.08)",
    color: "#667eea",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontSize: "1.1rem"
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={navbarStyle}
    >
      <Container style={{ position: "relative" }}>
        <NavBootstrap className="mx-auto fw-semibold">
          <NavBootstrap.Link
            as={NavLink}
            to="/"
            end
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            className="nav-link-custom"
          >
            🏠 Landing
          </NavBootstrap.Link>

          <NavBootstrap.Link
            as={NavLink}
            to="/portfolio"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            className="nav-link-custom"
          >
            💼 Proyectos
          </NavBootstrap.Link>

          <NavBootstrap.Link
            as={NavLink}
            to="/experience"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            className="nav-link-custom"
          >
            📚 Experiencia
          </NavBootstrap.Link>
        </NavBootstrap>

        <Button
          onClick={toggleTheme}
          style={themeButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = darkMode 
              ? "rgba(102, 126, 234, 0.2)" 
              : "rgba(102, 126, 234, 0.15)";
            e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = darkMode 
              ? "rgba(102, 126, 234, 0.1)" 
              : "rgba(102, 126, 234, 0.08)";
            e.target.style.boxShadow = "none";
          }}
          title={darkMode ? "Modo claro" : "Modo oscuro"}
        >
          {darkMode ? <SunFill /> : <MoonFill />}
        </Button>

      </Container>
    </Navbar>
  );
}

export default Nav;
