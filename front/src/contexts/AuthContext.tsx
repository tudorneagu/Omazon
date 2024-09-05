import { createContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
const AuthContext = createContext();

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loginForm, setLoginForm] = useState(false);
  const [loged, setLoged] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [error, setError] = useState(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const focusEmailInput = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  useEffect(() => {
    if (loginForm) {
      focusEmailInput();
    }
  }, [loginForm]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.checkAuth(); // Make a request to the backend
        setAuthData(response.user); // If the session is valid, set the user data
        setLoged(true);
      } catch (error) {
        // If the session is invalid, clear the authentication state
        console.log('didnt work');
        setAuthData(null);
        setLoged(false);
      }
    };

    checkAuth(); // Call the function on app load
  }, []);

  const loginUser = async (email, password) => {
    setError(null);
    try {
      const userData = await authService.login(email, password);
      console.log('User data received:', userData); // Add this line for debugging
      setAuthData(userData);
      setLoginForm(false);
      setLoged(true);
      localStorage;
      navigate('/cart');
    } catch (error) {
      setError('Email or password incorrect. Please try again.');
    }
  };

  const logoutUser = async () => {
    try {
      await authService.logout();
      setAuthData(null);
      setLoged(true);
      navigate('/home');
    } catch (error) {
      setError('Logout failed. Please try again.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginForm,
        setLoginForm,
        focusEmailInput,
        emailRef,
        authData,
        loginUser,
        logoutUser,
        loged,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
