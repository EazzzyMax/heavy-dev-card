import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
  z-index: 100;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(6px);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight:100;
  line-height: 40px;
  &:hover {
    cursor: pointer;
    color: #62d5fb;
    border:  solid  #62d5fb;
    border-width: 0 0 1px 0;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  height: 30px;
  font-weight: 300;
  font-size: 20px;
  padding: 5px 5px;
  margin: 0 15px ;
  &:hover {
    cursor: pointer;
    color: #62d5fb;
    border:  solid  ;
    border-width: 0 0 1px 0;
  }
`;
