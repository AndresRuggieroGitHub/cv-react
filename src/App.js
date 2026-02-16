import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppContent() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div style={{
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #222 100%)'
        : 'linear-gradient(135deg, #f5f7ff 0%, #f8f9fa 100%)',
      color: darkMode ? 'white' : 'black',
      minHeight: '100vh',
      transition: 'all 0.3s ease',
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      letterSpacing: '0.3px'
    }}>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
