import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './features/Dashboard/Dashboard';
import MainContainer from './components/MainContainer';
import Nav from './components/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

export default Router;
