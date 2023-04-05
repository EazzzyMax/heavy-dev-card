import React from "react";
import { Container, Title, Wrapper } from "./styles";
import AnimatedTitle from "./AnimatedTitle";
import withSmoothDisappear from "../../shared/hocs/withSmoothDisappear";

const Greeting = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Привет</Title>
        <Title>Я Максим</Title>
        <AnimatedTitle staticText="React" dynamicText="Native" />
        <Title>Разработчик</Title>
        {/*<Title>Hi,</Title>*/}
        {/*<Title>I'm Max,</Title>*/}
        {/*<AnimatedTitle staticText="React" dynamicText="Native" />*/}
        {/*<Title>Developer</Title>*/}
      </Wrapper>
    </Container>
  );
};

export default withSmoothDisappear(Greeting);
