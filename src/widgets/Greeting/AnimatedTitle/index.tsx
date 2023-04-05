import React, { useEffect, useState } from "react";
import { Caret, Container, DynamicText, StaticText } from "./styles";

interface IAnimatedTitle {
  staticText?: string;
  dynamicText: string;
}

const AnimatedTitle = ({ staticText, dynamicText }: IAnimatedTitle) => {
  const [currentDynamicText, setCurrentDynamicText] = useState("");

  useEffect(() => {
    let index = 0;
    const initialDelay = 300;

    const delayedStart = setTimeout(() => {
      const typeCharacter = (delay: number) => {
        if (index <= dynamicText.length) {
          setCurrentDynamicText(dynamicText.substring(0, index));
          index++;
          const nextDelay = delay * 0.82;
          setTimeout(() => typeCharacter(nextDelay), nextDelay);
        } else {
        }
      };

      typeCharacter(initialDelay);
    }, 600);

    return () => {
      clearTimeout(delayedStart);
    };
  }, [dynamicText]);

  return (
    <Container>
      <StaticText>{staticText}</StaticText>
      {currentDynamicText && (
        <DynamicText href={"https://reactnative.dev/"}>
          {currentDynamicText}
        </DynamicText>
      )}
      <Caret />
    </Container>
  );
};

export default AnimatedTitle;
