import React from 'react';
import styled from 'styled-components';
import List from '../List/List';

const Dashboard = () => {
  return (
    <>
      <DashboardWrap>
        <List />
      </DashboardWrap>
    </>
  );
};

export default Dashboard;

const DashboardWrap = styled.div`
  height: 80vh;
  padding: 20px;
  overflow-y: auto;
`;
