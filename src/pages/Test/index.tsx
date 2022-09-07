import React, {useState, useContext} from "react";
import styled from "styled-components";
import Fonts from "styles/fonts";
import TestContext from "stores/TestStore";
import Card from "../../components/Card"

const TestPage = () => {
  const testStore = useContext(TestContext);

  return (
    <Container>
      <Title>요가 후기</Title>
      <CardWrap>
        <Card />
      </CardWrap>
    </Container>
  );
};

export default TestPage;

const Title = styled.div`
  font-family : "Spoqa Han Sans Neo";
  font-size: 12px;
  margin: 5% 0px;
  font-weight : 600;
`
const Container = styled.div`
  width : 420px;
  margin : auto;
`;
const CardWrap = styled.div`
  padding-top : "36px 0px"
`