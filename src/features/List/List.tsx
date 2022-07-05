import React from 'react';
import styled from 'styled-components';

const List = () => {
  return (
    <>
      <ListWrap>
        <CardList>
          <Card>
            <CardDate>2022.07.05</CardDate>
            <CardTitle>제목</CardTitle>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardTagWrap>
              <CardTag>할일</CardTag>
            </CardTagWrap>
          </Card>
          <Card>
            <CardDate>2022.07.05</CardDate>
            <CardTitle>제목</CardTitle>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardTagWrap>
              <CardTag>운동</CardTag>
              <CardTag>할일</CardTag>
            </CardTagWrap>
          </Card>
          <Card>
            <CardDate>2022.07.05</CardDate>
            <CardTitle>제목</CardTitle>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardTagWrap>
              <CardTag>루틴</CardTag>
              <CardTag>할일</CardTag>
            </CardTagWrap>
          </Card>
          <Card>
            <CardDate>2022.07.05</CardDate>
            <CardTitle>제목</CardTitle>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardTagWrap>
              <CardTag>루틴</CardTag>
              <CardTag>운동</CardTag>
              <CardTag>할일</CardTag>
            </CardTagWrap>
          </Card>
        </CardList>
      </ListWrap>
    </>
  );
};

export default List;

const ListWrap = styled.div`
  border-top: 1px solid #e9e9e9;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.li`
  width: calc(100% / 3 - 20px);
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const CardDate = styled.p`
  border-bottom: 1px solid #e9e9e9;
  padding: 10px 20px;
  font-weight: 700;
`;

const CardTitle = styled.p`
  border-bottom: 1px solid #e9e9e9;
  padding: 10px 20px;
  font-weight: 700;
`;

const CardContent = styled.div`
  display: -webkit-box;
  padding: 10px 20px;
  max-height: 100px;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const CardTagWrap = styled.ul`
  display: flex;
  border-top: 1px solid #e9e9e9;
  padding: 10px 20px;
`;

const CardTag = styled.li`
  border: 1px solid #26de81;
  border-radius: 8px;
  padding: 5px 10px;
  margin-right: 10px;
  background: rgba(38, 222, 129, 0.2);
`;
