// Import Dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Pages
import SplashScreen from './components/SplashScreen';
import Login from './pages/account/AuthPage';
import Home from './pages/home/Home';


const RoutesList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed (in milliseconds)
  }, []);

  let content;
  if (isLoading) {
    content = <SplashScreen />;
  } else {
    content = (
      <Routes>
        {/* <Route path="/" element={<AuthPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Other routes */}
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  );
};

export default RoutesList;
