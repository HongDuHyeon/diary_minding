import React, { useState } from 'react';
import styled from 'styled-components';
import { CardTag } from '../../List/List';
import { iTag } from '../Write';

export type tagProps = {
  handleTag: (text: string) => void;
  tag: iTag[];
};

const Tag = ({ handleTag, tag }: tagProps) => {
  const [tagName, setTagName] = useState('');

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(e.target.value);
  };

  const onTagSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleTag(tagName);
    setTagName('');
    console.log(tagName);
  };

  return (
    <>
      <TagWrap>
        <TagInput
          name="tag"
          value={tagName}
          placeholder="태그를 입력해주세요"
          onChange={handleTagChange}
        />
        <TagButton onClick={onTagSubmit}>적용</TagButton>
        <WriteTagWrap>
          {tag && tag.map(list => <CardTag key={list.id}>{list.text}</CardTag>)}
        </WriteTagWrap>
      </TagWrap>
    </>
  );
};

export default Tag;

const TagWrap = styled.div`
  margin-top: 20px;
`;

export const TagInput = styled.input`
  height: 38px;
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

const WriteTagWrap = styled.ul`
  display: flex;
  margin-top: 20px;
`;
