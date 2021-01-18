import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../utils/theme";

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
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 5vh;
`;

const Title = styled.h1`
  /* color: yellow; */
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
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

const SearchBar = styled.input`
  width: 150px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;
