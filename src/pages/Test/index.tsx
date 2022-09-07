import React, {useState, useContext} from "react";
import styled from "styled-components";
import Fonts from "styles/fonts";
import TestContext from "stores/TestStore";
import Card from "../../components/Card"
import useEmblaCarousel from "embla-carousel-react";
import dummy_set from "../../assets/data_set"
const TestPage = () => {
  const testStore = useContext(TestContext);
  const [emblaRef] = useEmblaCarousel();
  console.log(dummy_set)
  return (
    <Container>
            <Title>요가 후기</Title>
        <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          dummy_set.map((cardData)=>{
            return (
            <div className="embla__slide" >      
            <Card  url={cardData.url} title={cardData.title} content={cardData.content} name={cardData.name} />
            </div>
            )
          })
        }

      </div>
    </div>


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