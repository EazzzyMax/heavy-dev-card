import React from "react";
import {Container, Tab, Tabs, Title} from "./styles";


const Header = () => {
    const tabs = [
        {name: 'проекты'},
        {name: 'контакты'},
    ]
  return (
    <Container>
      <Title>Максим Легкий</Title>
      <Tabs>
          {tabs?.map((tab) => (
              <Tab key={tab.name}>{tab.name}</Tab>
          ))}
      </Tabs>
    </Container>
  );
};

export default Header;
