import React from "react";
import { PageContainer } from "./styles";
import Header from "../../widgets/header";
import About from "../../widgets/Greeting";
// @ts-ignore
import DancingLines from "react-dancing-lines";

const Main = () => {
  return (
    <PageContainer>
      <DancingLines
        // debug={true}
        backgroundColor={"rgb(8,5,26)"}
        dampening={0.26}
        size={50}
        friction={0.504}
        trails={200}
      />
      {/*<DancingLines/>*/}
      <Header />
      <About />
      <About />
      <About />
    </PageContainer>
  );
};

export default Main;
