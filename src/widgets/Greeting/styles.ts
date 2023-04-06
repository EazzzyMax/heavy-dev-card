import styled, { keyframes } from "styled-components";

export const TITLE_FONT_SIZE = "calc(6vw + 14px)";

const appearance = keyframes`
    0% {
      opacity: 0;
    }
  20% {
    opacity: 0;
  }
    100% {
      opacity: 1;
    }
`;

export const Container = styled.div`
  padding: 30px 50px;
  min-height: 100vh;
  animation: ${appearance} 1300ms ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
`;

export const Title = styled.p`
  font-size: ${TITLE_FONT_SIZE};
  font-weight: 100;
`;
