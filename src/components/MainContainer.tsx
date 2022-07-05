import React from 'react';
import styled from 'styled-components';

interface childProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: childProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
`;
