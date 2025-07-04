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
    window.location.href = 'https://planhattan.ddns.net/api/oauth2/authorization/google';
    // window.location.href = 'http://localhost:8000/api/oauth2/authorization/google';
  };

  // 初始化时检查登录状态

  return (
    <div className="container">
      <h1>Google Login Test</h1>

      {error && <div className="error">{error}</div>}

      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login with Google'}
      </button>

      <button onClick={() => {
        axios.get('https://planhattan.ddns.net/api/csrf-token').then(response => {
          console.log(response.data);
        }).catch(error => {
          console.error(error);
        });
      }} disabled={loading}>
        {loading ? 'Loading...' : 'Get CSRF Token'}
      </button>

      <button onClick={() => {
        const params = new URLSearchParams();
        params.append('username', 'zeli');
        params.append('password', '123');
        axios.post('https://planhattan.ddns.net/api/login', params,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        ).then(response => {
          console.log(response.data);
        }).catch(error => {
          console.error(error);
        });
      }} disabled={loading}>
        {loading ? 'Loading...' : 'Normal Login'}
      </button>

    </div>
  );
}
