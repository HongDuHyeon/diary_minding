import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
      <HeaderWrap>
        <HeaderTitle>Header</HeaderTitle>
      </HeaderWrap>
    </>
  );
};

export default Nav;

const HeaderWrap = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #e9e9e9;
  text-align: center;
`;

const HeaderTitle = styled.p`
  font-size: 20px;
`;
