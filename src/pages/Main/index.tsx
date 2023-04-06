import React from "react";
import { PageContainer } from "./styles";
import Header from "../../widgets/header";
import About from "../../widgets/Greeting";
// @ts-ignore
import DancingLines from "react-dancing-lines";
import CursorDistanceTracker from "../../widgets/CursorDistanceTracker";

const Main = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <PageContainer>
      {!isMobile && (
        <DancingLines
          debug={true}
          backgroundColor={"rgb(8,5,29)"}
          dampening={0.26}
          size={50}
          friction={0.504}
          trails={200}
        />
      )}
      {/*<DancingLines/>*/}
      <Header />
      <About />
      <About />
      <About />
      <CursorDistanceTracker />
    </PageContainer>
  );
};

export default Main;
