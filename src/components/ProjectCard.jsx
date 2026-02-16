import React, { useState, useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function ProjectCard({ title, description, image, link, tags }) {
  const [show, setShow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const cardStyle = {
    width: '18rem',
    margin: '15px',
    border: 'none',
    borderRadius: '15px',
    background: darkMode ? '#2c2c2c' : '#fff',
    color: darkMode ? 'white' : 'black',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
    cursor: 'default',
    transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
    boxShadow: isHovered 
      ? (darkMode ? '0 20px 40px rgba(255, 255, 255, 0.15)' : '0 20px 40px rgba(0, 0, 0, 0.2)')
      : (darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.08)')
  };

  const tagStyle = {
    marginRight: '6px',
    marginBottom: '6px',
    fontWeight: '600',
    fontSize: '0.8rem',
    borderRadius: '20px',
    padding: '6px 14px',
    background: '#0891b2',
    color: 'white',
    border: 'none',
    boxShadow: '0 2px 8px rgba(8, 145, 178, 0.3)',
    transition: 'all 0.2s ease'
  };

  const viewProjectButtonStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    color: 'white',
    fontWeight: '600',
    borderRadius: '8px',
    padding: '10px 16px',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    marginTop: '15px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    width: '100%'
  };

  return (
    <Card 
      style={cardStyle}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
          <Card.Img 
            variant="top" 
            src={image} 
            style={{ 
              height: "100%", 
              objectFit: "cover",
              transition: 'transform 0.4s ease',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)'
            }}
          />
        </div>
      )}
      
      <Card.Body style={{ backgroundColor: "transparent", minHeight: "120px", padding: '20px' }}>
        <Card.Title style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: '700' }}>
          {title}
        </Card.Title>

        <Button 
          variant="outline-secondary"
          onClick={() => setShow(!show)}
          size='sm'
          style={{ 
            marginBottom: '15px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: '600',
            padding: '6px 14px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = darkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
          }}
        >
          {show ? '⬆️ Ocultar' : '⬇️ Mostrar'} descripción
        </Button>

        {show && (
          <Card.Text style={{ 
            marginBottom: '15px', 
            lineHeight: '1.6',
            fontSize: '0.95rem',
            color: darkMode ? '#bbb' : '#666'
          }}>
            {description}
          </Card.Text>
        )}

        {tags && (
          <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {tags.map((tag, i) => (
              <Badge key={i} style={tagStyle}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...viewProjectButtonStyle,
              opacity: isHovered ? 1 : 0.9,
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isHovered ? '0 8px 20px rgba(102, 126, 234, 0.4)' : '0 4px 12px rgba(102, 126, 234, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
            }}
          >
            🔗 Ver Proyecto
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
