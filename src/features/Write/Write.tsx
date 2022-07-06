import React from 'react';
import styled from 'styled-components';
import { CardTag } from '../List/List';

const Write = () => {
  return (
    <>
      <WriteForm>
        <WriteButtonWrap>
          <WriteSubmitButton>적용하기</WriteSubmitButton>
        </WriteButtonWrap>
        <WriteContents>
          <WriteDate>2022.07.06</WriteDate>
          <WriteTitle placeholder="제목을 입력하세요" />
          <WriteText />
          <TagWrap>
            <TagInput placeholder="태그를 입력해주세요" />
            <TagButton>적용</TagButton>
            <WriteTagWrap>
              <CardTag>태그1</CardTag>
              <CardTag>태그2</CardTag>
              <CardTag>태그3</CardTag>
            </WriteTagWrap>
          </TagWrap>
        </WriteContents>
      </WriteForm>
    </>
  );
};

export default Write;

const WriteForm = styled.form`
  position: relative;
`;

const WriteButtonWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const WriteSubmitButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
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

const TagWrap = styled.div`
  margin-top: 20px;
`;

const TagInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  line-height: 26px;
`;

const TagButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  line-height: 26px;
`;

const WriteText = styled.textarea`
  width: 100%;
  min-height: 300px;
  margin-top: 30px;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  resize: none;
`;
const WriteTagWrap = styled.ul`
  display: flex;
  margin-top: 20px;
`;
