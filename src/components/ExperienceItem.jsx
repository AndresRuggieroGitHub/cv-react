import React from 'react';
import { Card } from 'react-bootstrap';

function ExperienceItem({ role, place, dates, details }) {
  return (
    <Card style={{ margin: '10px' }}>
      <Card.Body>
        <Card.Title>{role} - {place}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dates}</Card.Subtitle>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceItem;
