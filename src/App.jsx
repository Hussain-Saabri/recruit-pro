import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Login from './pages/auth/Login'
import Dashboard from './pages/dashboard/Dashboard'
import './App.css'
import { Toaster, toast } from 'sonner'

const theme = createTheme({
  typography: {
    fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    toast("Logged out successfully.");
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster richColors position="top-right" closeButton />
      {isLoggedIn ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </ThemeProvider>
  )
}

export default App
