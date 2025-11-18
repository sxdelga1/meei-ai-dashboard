import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="header-content">
              <div>
                <h1>🚀 MEEI AI Dashboard</h1>
                <p>Servicios de Inteligencia Artificial Integrados</p>
              </div>
              <div className="status">
                <span className="status-badge">🔄 Backend Desplegando...</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="progress-message">
              <h3>⚙️ Configurando Backend Amplify Gen 2</h3>
              <div className="progress-steps">
                <div className="step completed">✅ Frontend desplegado</div>
                <div className="step in-progress">🔄 Backend en progreso</div>
                <div className="step pending">⏳ Autenticación pendiente</div>
                <div className="step pending">⏳ Base de datos pendiente</div>
              </div>
            </div>
            
            <div className="services">
              <div className="service-card">
                <div className="icon">🎵</div>
                <h4>Amazon Polly</h4>
                <p>Convierte texto a voz natural</p>
                <button disabled>Configurando backend...</button>
              </div>
              <div className="service-card">
                <div className="icon">🤖</div>
                <h4>Amazon Bedrock</h4>
                <p>Generación de contenido IA</p>
                <button disabled>Configurando backend...</button>
              </div>
              <div className="service-card">
                <div className="icon">🎨</div>
                <h4>Canvas Editor</h4>
                <p>Editor interactivo</p>
                <button disabled>Configurando backend...</button>
              </div>
            </div>
            
            <div className="info-message">
              <div className="icon">ℹ️</div>
              <h5>Backend Amplify Gen 2 en Configuración</h5>
              <div className="features">
                <div>🔐 AWS Cognito (configurando...)</div>
                <div>🗄️ DynamoDB (configurando...)</div>
                <div>📁 S3 Storage (configurando...)</div>
                <div>⚡ GraphQL API (configurando...)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
