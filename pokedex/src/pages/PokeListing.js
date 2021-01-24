import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import pokemonTypeColors from "../utils/pokemonTypeColors";
import { COLORS } from "../utils/theme";
import { CgPokemon } from "react-icons/cg";

const PokeListing = () => {
  const { pokemon } = useParams();
  const [pokemonObject, setPokemonObject] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => data.json())
      .then((data) => setPokemonObject(data))
      .catch((error) => console.log(error));
  }, [pokemon]); // eslint-disable

  return (
    <>
      {pokemonObject === null ? (
        <div>Loading</div>
      ) : (
        <Wrapper>
          <BackgroundLogo></BackgroundLogo>
          <PokeName>{pokemonObject.name}</PokeName>

          <ImageInfoContainer>
            <SpriteContainer>
              <Sprite
                src={pokemonObject.sprites.other.dream_world.front_default}
                alt={pokemonObject.name}
              />
            </SpriteContainer>

            <GeneralInfoContainer>
              <GeneralInfoName>National № </GeneralInfoName>
              <NationalNumber>{pokemonObject.id}</NationalNumber>

              <GeneralInfoName>Type </GeneralInfoName>
              <TypeContainer>
                {pokemonObject.types.map((type) => {
                  return (
                    <Type
                      color={pokemonTypeColors[type.type.name].color}
                      border={pokemonTypeColors[type.type.name].border}
                    >
                      <TypeName>{type.type.name}</TypeName>
                    </Type>
                  );
                })}
              </TypeContainer>

              <GeneralInfoName>Height </GeneralInfoName>
              <HeightWeight>{pokemonObject.height / 10} m</HeightWeight>

              <GeneralInfoName>Weight </GeneralInfoName>
              <HeightWeight>{pokemonObject.weight / 10} kg</HeightWeight>

              <GeneralInfoName>Abilities </GeneralInfoName>
              <AbilitiesContainer>
                {/* object . values ability and show them, if it works do the same with types */}
                {pokemonObject.abilities.map(({ ability }) => (
                  <Ability>{ability.name}</Ability>
                ))}
              </AbilitiesContainer>
              <GeneralInfoName>Base Exp. </GeneralInfoName>
              <BaseExp>{pokemonObject.base_experience}</BaseExp>
            </GeneralInfoContainer>
          </ImageInfoContainer>
          <StatWrapper>
            <StatTitle>Base Stats</StatTitle>
            {pokemonObject.stats.map((element) => {
              return (
                <StatContainer>
                  <StatName>{element.stat.name}</StatName>
                  <StatValue>&nbsp;{element.base_stat}</StatValue>
                  <StatBar base_stat={element.base_stat}></StatBar>
                </StatContainer>
              );
            })}
            <StatContainer>
              <StatName>Total</StatName>
              <StatValue>
                &nbsp;
                {pokemonObject.stats.reduce(
                  (accumulator, element) => accumulator + element.base_stat,
                  0
                )}
              </StatValue>
            </StatContainer>
          </StatWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default PokeListing;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  height: 100%;
  padding: 0 5vw;
  width: 80vw;
  margin: auto;
  /* background-color: plum; */

  @media only screen and (max-width: 400px) {
    width: 95vw;
  }
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `;

const BackgroundLogo = styled(CgPokemon)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: whitesmoke;
  z-index: -9;
  animation: ${rotate} 10s linear infinite;
`;

const PokeName = styled.h1`
  text-transform: capitalize;
  margin-bottom: 5vh;
`;

const ImageInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GeneralInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2vw;

  @media only screen and (max-width: 400px) {
    grid-row-gap: 1vh;
  }
`;

const NationalNumber = styled.div`
  font-weight: bold;
  text-align: left;
`;

const GeneralInfoName = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${COLORS.statName};

  @media only screen and (max-width: 400px) {
    justify-content: center;
  }
`;

const TypeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    &:first-child {
      margin-bottom: 20vh;
    }
  }
`;

const Type = styled.div`
  min-width: 5vw;
  height: 3vh;
  text-transform: uppercase;
  text-shadow: 1px 1px black;
  /* margin: 10px; */
  padding: 5px 8px;
  /* display: inline; */
  display: flex;
  justify-content: center;
  border-radius: 6px;
  font-size: 11px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: ${({ color }) => color};
  border: ${({ border }) => border};

  @media only screen and (max-width: 400px) {
    max-width: 17vw;
  }
`;

const TypeName = styled.span``;

const HeightWeight = styled.div`
  text-align: left;
`;

const AbilitiesContainer = styled.div`
  text-transform: capitalize;
  text-align: left;
`;
const Ability = styled.div``;

const BaseExp = styled.span`
  text-align: left;
`;

const SpriteContainer = styled.div`
  width: 50%;
`;

const Sprite = styled.img`
  max-width: 300px;
  /* height: 50%; */
  width: 100%;
`;

const StatTitle = styled.h3`
  color: ${COLORS.statName};
  margin-left: 5px;
  text-align: left;
  margin-top: 3vh;
  margin-bottom: 1vh;
`;

const StatWrapper = styled.div`
  flex: 1;
`;

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px 5px;
  /* background-color: plum; */
`;

const StatName = styled.div`
  text-align: left;
  min-width: 11vw;
  color: gray;
  text-transform: capitalize;
  font-size: 1.5vw;

  @media only screen and (max-width: 400px) {
    min-width: 27vw;
    font-size: 3.5vw;
  }
`;

const StatValue = styled.div`
  min-width: 5vw;
  font-size: 1.5vw;

  @media only screen and (max-width: 400px) {
    min-width: 8vw;
    font-size: 3.5vw;
  }
`;

const StatBar = styled.span`
  background-color: ${({ base_stat }) => {
    if (base_stat < 50) return "orange";
    else if (base_stat > 49 && base_stat < 100) return "gold";
    else return "limegreen";
  }};
  border-radius: 10px;
  height: 20px;
  width: ${({ base_stat }) => base_stat * 3}px;

  @media only screen and (max-width: 400px) {
    width: ${({ base_stat }) => base_stat * 1.2}px;
  }
`;
