import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { iTag } from '../Write/Write';
import { TagInput } from '../Write/components/Tag';

interface iCardList {
  id: number;
  date: number | string;
  title: string;
  text: string;
  tag: iTag[];
}

const List = () => {
  const [cardList, setCardList] = useState<iCardList[]>([]);
  const [tagValue, setTagValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/diary', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setCardList(data));
  }, []);

  const goToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const goToWrite = () => {
    navigate('/write');
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const mappingList = cardList.filter(tagList => {
    if (tagValue === '') {
      return tagList;
    }
    return tagList.tag.find(list => list.text === tagValue);
  });

  return (
    <>
      <ListUtilWrap>
        <TagInput
          onChange={onChangeSearch}
          placeholder="태그를 검색해보세요 !"
        />
        <ListButton onClick={goToWrite}>일기 쓰기</ListButton>
      </ListUtilWrap>
      <ListWrap>
        {mappingList &&
          mappingList.reverse().map(list => (
            <Card key={list.id} onClick={() => goToDetail(list.id)}>
              <CardDate>{list.date}</CardDate>
              <CardTitle>{list.title}</CardTitle>
              <CardContent>{list.text}</CardContent>
              <CardTagWrap>
                {list.tag &&
                  list.tag.map(tag => (
                    <CardTag key={tag.id}>{tag.text}</CardTag>
                  ))}
              </CardTagWrap>
            </Card>
          ))}
      </ListWrap>
    </>
  );
};

export default List;

const ListUtilWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.li`
  width: calc(100% / 3 - 20px);
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-right: 30px;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 0;
  }
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

export const CardTag = styled.li`
  border: 1px solid #26de81;
  border-radius: 8px;
  padding: 5px 10px;
  margin-right: 10px;
  background: rgba(38, 222, 129, 0.2);
`;
