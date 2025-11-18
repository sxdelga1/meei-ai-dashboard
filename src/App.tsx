import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>🚀 MEEI AI Dashboard</h1>
            <p>Servicios de Inteligencia Artificial Integrados</p>
          </div>
          <div className="content">
            <div className="services">
              <div className="service-card">
                <div className="icon">🎵</div>
                <h4>Amazon Polly</h4>
                <p>Convierte texto a voz natural</p>
                <button disabled>Próximamente</button>
              </div>
              <div className="service-card">
                <div className="icon">🤖</div>
                <h4>Amazon Bedrock</h4>
                <p>Generación de contenido IA</p>
                <button disabled>Próximamente</button>
              </div>
              <div className="service-card">
                <div className="icon">🎨</div>
                <h4>Canvas Editor</h4>
                <p>Editor interactivo</p>
                <button disabled>Próximamente</button>
              </div>
            </div>
            
            <div className="success-message">
              <div className="icon">✅</div>
              <h5>¡Proyecto Configurado Exitosamente!</h5>
              <div className="features">
                <div>🔧 Amplify Gen 2 configurado</div>
                <div>📦 Dependencias listas</div>
                <div>⚛️ React + TypeScript</div>
                <div>🚀 Preparado para servicios AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
