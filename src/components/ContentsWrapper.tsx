import React from 'react';
import styled from 'styled-components';

interface childProps {
  children: React.ReactNode;
}

const ContentsWrapper = ({ children }: childProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentsWrapper;

const Wrapper = styled.div`
  height: 80vh;
  padding: 20px;
  overflow-y: auto;
`;
