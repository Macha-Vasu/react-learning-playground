import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css'; // Import CSS file

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (formData) => {
    setIsLoading(true);
    setLoginMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock authentication logic
      if (formData.email === 'user@example.com' && formData.password === 'password123') {
        setLoginMessage('Login successful! Welcome back.');
        // Here you would typically redirect or update app state
        console.log('Login successful:', formData);
      } else {
        setLoginMessage('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setLoginMessage('An error occurred. Please try again later.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to your account</p>
        </div>
        
        <LoginForm 
          onLogin={handleLogin} 
          isLoading={isLoading} 
        />
        
        {loginMessage && (
          <div className={`message ${loginMessage.includes('successful') ? 'success' : 'error'}`}>
            {loginMessage}
          </div>
        )}
        
        <div className="signup-link">
          <p>Don't have an account? <a href="#signup">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;