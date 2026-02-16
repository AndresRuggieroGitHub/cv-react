import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container>
      <Row className="justify-content-center g-4">
        {projectsData.map((p, i) => (
          <Col key={i} xs="auto">
            <ProjectCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
