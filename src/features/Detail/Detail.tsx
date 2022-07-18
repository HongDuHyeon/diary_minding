import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardTag } from '../List/List';
import { iTag, WriteButtonWrap, WriteExitButton } from '../Write/Write';

interface iFeed {
  date: string;
  title: string;
  text: string;
  tag: iTag[];
}

const Detail = () => {
  const [feed, setFeed] = useState<iFeed>({
    date: '',
    title: '',
    text: '',
    tag: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/diary/${params.id}`)
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  const { date, title, text, tag } = feed;

  const goToList = () => {
    navigate('/');
  };

  return (
    <DetailWrap>
      <WriteButtonWrap>
        <WriteExitButton onClick={goToList}>나가기</WriteExitButton>
      </WriteButtonWrap>
      <DetailContents>
        <DetailDate>{date}</DetailDate>
        <DetailTitle>{title}</DetailTitle>
        <DetailText>{text}</DetailText>
        <DetailTagWrap>
          {tag && tag.map(list => <CardTag key={list.id}>{list.text}</CardTag>)}
        </DetailTagWrap>
      </DetailContents>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  position: relative;
`;

const DetailContents = styled.div`
  width: 700px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
`;

const DetailDate = styled.p`
  font-size: 20px;
`;

const DetailTitle = styled.div`
  font-size: 26px;
  margin-top: 20px;
`;

const DetailText = styled.div`
  font-size: 16px;
`;

const DetailTagWrap = styled.div`
  display: flex;
  border-top: 1px solid #e9e9e9;
  margin: 20px -20px 0;
  padding: 20px 20px 0;
`;
