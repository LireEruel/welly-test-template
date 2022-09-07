import React, { useState, useContext } from "react";
``;
import styled from "styled-components";

const Card = ({ url, title, content, name }) => {
  console.log(url);
  return (
    <Container>
      <ImgWrap>
        <img className="w-full" src={url}></img>
      </ImgWrap>

      <Content>
        <Title>{title}</Title>
        <Disciption>
          일방적으로 보고 따라하는 수업이 아니라 선생님과 라이브로 진행이 되어서
          내 자세도 실시간으로 꼼꼼하게 지도해주신다 😗
        </Disciption>
        <Bottom>
          <BottomText>a7***님</BottomText>
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
`;
const Disciption = styled.div`
  font-size: 10px;
  font-weight: bold;
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
