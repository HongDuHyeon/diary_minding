import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Tag from './components/Tag';

let nextId = 1;

export interface iWrite {
  date?: number | string;
  title: string;
  text: string;
}

export interface iTag {
  id: number | string;
  text: string;
}

const Write = () => {
  const [write, setWrite] = useState<iWrite>({
    date: '',
    title: '',
    text: '',
  });
  const [tag, setTag] = useState<iTag[]>([]);
  const navigate = useNavigate();

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const goToList = () => {
    navigate('/');
  };

  const onDiaryPost = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('http://localhost:4000/diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: write.date,
        title: write.title,
        text: write.text,
        tag: tag,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          alert('새로운 일기가 추가 되었습니다.');
          handleWriteReset();
          goToList();
        }
      });
  };

  useEffect(() => {
    setWrite(prev => ({ ...prev, date: `${year}.${month}.${day}` }));
  }, []);

  const handleWriteInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setWrite(prev => ({ ...prev, [name]: value }));
  };

  const handleWriteText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setWrite(prev => ({ ...prev, [name]: value }));
  };

  const handleTag = (text: string) => {
    if (text === '') {
      return;
    } else {
      const tagList = {
        id: nextId,
        text,
      };
      setTag(tag => tag.concat(tagList));
      nextId++;
    }
  };
  const handleWriteReset = () => {
    setWrite(prev => ({ ...prev, title: '', text: '' }));
    setTag([]);
  };

  return (
    <>
      <WriteForm>
        <WriteButtonWrap>
          <WriteSubmitButton onClick={onDiaryPost}>만들기</WriteSubmitButton>
          <WriteExitButton onClick={goToList}>나가기</WriteExitButton>
        </WriteButtonWrap>
        <WriteContents>
          <WriteDate>{write.date}</WriteDate>
          <WriteTitle
            name="title"
            value={write.title}
            onChange={handleWriteInput}
            placeholder="제목을 입력하세요"
          />
          <WriteText
            name="text"
            value={write.text}
            onChange={handleWriteText}
          />
          <Tag handleTag={handleTag} tag={tag} />
        </WriteContents>
      </WriteForm>
    </>
  );
};

export default Write;

const WriteForm = styled.form`
  position: relative;
`;

export const WriteButtonWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const WriteSubmitButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
`;

export const WriteExitButton = styled(WriteSubmitButton)`
  margin-left: 10px;
`;

const WriteContents = styled.div``;

const WriteDate = styled.p`
  font-size: 25px;
  margin-bottom: 37px;
`;

const WriteTitle = styled.input`
  width: 100%;
  line-height: 36px;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  outline: none;
`;

const WriteText = styled.textarea`
  width: 100%;
  min-height: 300px;
  margin-top: 30px;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  font-family: inherit;
  resize: none;
`;
