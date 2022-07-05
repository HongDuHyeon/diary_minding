import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import Nav from '../components/Nav';
import Dashboard from './Dashboard/Dashboard';

const MainRouter = () => {
  return (
    <>
      <MainContainer>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainContainer>
    </>
  );
};

export default MainRouter;
