import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRobot, FaMicrophone, FaPalette, FaCheckCircle } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="min-vh-100 bg-light">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={10}>
            <Card className="shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-4">
                <h1 className="mb-2">🚀 MEEI AI Dashboard</h1>
                <p className="mb-0">Servicios de Inteligencia Artificial Integrados</p>
              </Card.Header>
              <Card.Body className="p-5">
                <Row className="text-center mb-5">
                  <Col md={4} className="mb-4">
                    <div className="service-card p-4 border rounded h-100">
                      <FaMicrophone size={60} className="text-danger mb-3" />
                      <h4>Amazon Polly</h4>
                      <p className="text-muted">Convierte texto a voz natural con múltiples idiomas</p>
                      <Button variant="outline-danger" disabled>
                        Próximamente
                      </Button>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="service-card p-4 border rounded h-100">
                      <FaRobot size={60} className="text-success mb-3" />
                      <h4>Amazon Bedrock</h4>
                      <p className="text-muted">Generación de contenido con modelos de IA avanzados</p>
                      <Button variant="outline-success" disabled>
                        Próximamente
                      </Button>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="service-card p-4 border rounded h-100">
                      <FaPalette size={60} className="text-info mb-3" />
                      <h4>Canvas Editor</h4>
                      <p className="text-muted">Editor interactivo para crear contenido visual</p>
                      <Button variant="outline-info" disabled>
                        Próximamente
                      </Button>
                    </div>
                  </Col>
                </Row>
                
                <div className="text-center p-4 bg-success bg-opacity-10 rounded">
                  <FaCheckCircle size={40} className="text-success mb-3" />
                  <h5 className="text-success">✅ Proyecto Configurado Exitosamente</h5>
                  <Row className="mt-3">
                    <Col md={6}>
                      <p className="mb-1">🔧 Amplify Gen 2 configurado</p>
                      <p className="mb-1">📦 Dependencias listas</p>
                    </Col>
                    <Col md={6}>
                      <p className="mb-1">⚛️ React + TypeScript</p>
                      <p className="mb-1">🚀 Preparado para servicios AI</p>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
