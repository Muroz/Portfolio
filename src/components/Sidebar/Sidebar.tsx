import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #707070;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  max-width: 20%;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const NavItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  font-size: 25px;
  margin: 10px 0px;
  padding: 15px 30px;

  &:hover {
    background: #26212124;
  }

  ${(props) => props.isSelected && `background: #26212124;`}
`;

const HeaderContainer = styled.div`
  padding: 30px 30px 20px;
  border-bottom: 1px solid #707070;
  margin-bottom: 20px;
`;

const Header = styled.div`
  font-size: 30px;
`;

const SubHeader = styled.div`
  font-size: 15px;
`;

const Sidebar = () => {
  const items = ["Home", "Tutorials", "Blogs", "Contact"];
  const selectedItem = "Home";
  return (
    <Container>
      <HeaderContainer>
        <Header>Diego Zuluaga</Header>
        <SubHeader>Developer</SubHeader>
      </HeaderContainer>
      {items.map((item) => {
        const isSelected = item === selectedItem;

        return <NavItem isSelected={isSelected}>{item}</NavItem>;
      })}
    </Container>
  );
};

export default Sidebar;
