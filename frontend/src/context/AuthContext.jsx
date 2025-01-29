import { createContext, useContext, useState, useEffect } from 'react';
import api from '../axios.js'; // Ensure this is properly configured
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add axios response interceptor
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get('/auth/check');
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('token', data.token);
      
      // Decode token to get user info
      const decoded = jwtDecode(data.token);
      setUser(decoded.user);
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Propagate error to handle in UI
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    // Optional: Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);