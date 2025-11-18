import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css';

function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

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
              <div className="user-info">
                <span>👤 {user?.signInDetails?.loginId}</span>
                <button onClick={signOut} className="sign-out-btn">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="welcome-message">
              <h3>¡Bienvenido, {user?.signInDetails?.loginId}! 👋</h3>
              <p>Tu backend Amplify Gen 2 está funcionando correctamente</p>
            </div>
            
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
              <h5>¡Backend Amplify Gen 2 Configurado!</h5>
              <div className="features">
                <div>🔐 Autenticación AWS Cognito</div>
                <div>🗄️ Base de datos DynamoDB</div>
                <div>📁 Storage S3</div>
                <div>⚡ APIs GraphQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

