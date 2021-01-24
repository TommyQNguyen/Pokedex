import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../utils/theme";
import { SiPokemon } from "react-icons/si";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Title></Title>
      </Link>

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
  /* padding-top: 0px; */
  /* padding-bottom: 30px; */
  /* margin-bottom: 5vh; */
`;

const Title = styled(SiPokemon)`
  /* color: yellow; */
  font-size: 20vw;
  height: 10vw;

  &:hover {
    color: #ffcb05;
  }
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
    color: ${COLORS.secondary};
    font-weight: 700;
  }
`;
