import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
axios.defaults.withCredentials = true;
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 触发后端 OAuth2 流程
  const handleLogin = () => {
    window.location.href = 'http://localhost:8000/api/oauth2/authorization/google';
  };

  // 初始化时检查登录状态

  return (
    <div className="container">
      <h1>Google Login Test</h1>

      {error && <div className="error">{error}</div>}

      {user ? (
        <div className="profile">
          <img src={user.picture} alt="avatar" />
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => {
            window.location.href = 'http://localhost:8000/logout'; // 触发后端退出
            setUser(null);
          }}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Login with Google'}
        </button>
      )}
      <button onClick={() => {
        axios.get('http://localhost:8000/api/csrf-token').then(response => {
          console.log(response.data);
        }).catch(error => {
          console.error(error);
        });
      }} disabled={loading}>
        {loading ? 'Loading...' : 'Login with Google'}
      </button>
    </div>
  );
}
