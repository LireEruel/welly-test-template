import React, { useState, useContext } from "react";
``;
import styled from "styled-components";

const Card = ({ url, title, content, name }) => {
  return (
    <Container>
      <ImgWrap>
        <img className="w-full" src={url}></img>
      </ImgWrap>

      <Content>
        <Title>{title}</Title>
        <Disciption>{content}</Disciption>
        <Bottom>
          <BottomText>{name}님</BottomText>
          <BottomText>게시물로 이동 &gt;</BottomText>
        </Bottom>
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 246.065px;
  margin-right: 12px;
`;
const Content = styled.div`
  flex: 1 1 0%;
  position: relative;
  padding: 14px 20px 44px;
  background-color: white;
  border: 1px solid rgb(232, 232, 232);
`;
const ImgWrap = styled.div`
  width: 100%;
`;
const Title = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Disciption = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;
const BottomText = styled.div`
  font-size: 8px;
  curser: pointer;
  color: grey;
`;
