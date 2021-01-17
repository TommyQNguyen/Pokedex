import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../utils/theme";
import Button from "./Button";

const Header = () => {
  return (
    <Wrapper>
      <Title>Pokedex</Title>

      <nav>
        <NavigationList>
          <li>
            <NavigationLink exact activeClassName="active" to="/">
              Home
            </NavigationLink>
          </li>

          <li>
            <NavigationLink activeClassName="active" to="/about">
              About me
            </NavigationLink>
          </li>
        </NavigationList>
      </nav>

      {/* <SearchContainer>
        <SearchBar></SearchBar>
        <ClearButton>Clear</ClearButton>
      </SearchContainer> */}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  /* background-color: plum; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  /* color: yellow; */
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavItem = styled.div`
  color: #fff;
  font-size: 30px;
  margin: 20px;
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;

  &.active {
    /* border-bottom: 3px solid ${COLORS.secondary};
     */
    color: ${COLORS.secondary};
    font-weight: 700;
  }
`;

const SearchContainer = styled.div``;

const SearchBar = styled.input`
  width: 150px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const ClearButton = styled(Button)`
  margin-left: 1vw;
`;
