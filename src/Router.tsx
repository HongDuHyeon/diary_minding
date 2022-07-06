import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import ContentsWrapper from './components/ContentsWrapper';
import Nav from './components/Nav';
import Dashboard from './features/Dashboard/Dashboard';
import Detail from './features/Detail/Detail';
import Write from './features/Write/Write';

const Router = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Nav />
        <ContentsWrapper>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/write" element={<Write />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </ContentsWrapper>
      </MainContainer>
    </BrowserRouter>
  );
};

export default Router;
