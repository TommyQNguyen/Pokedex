import React from "react";

import styled from "styled-components";
import tommy from "../images/tommy.png";
import { COLORS } from "../utils/theme";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const About = () => {
  return (
    <Wrapper>
      <IntroContainer>
        <Introduction>
          Hi there! I'm Tommy, a student, and a Front End Developer based in
          Montreal, QC.
        </Introduction>

        <Introduction>
          I have fun creating components that roams on the internet, whether
          that be websites, applications, or anything in between! My purpose is
          to create projects that provide performant, and visually appealing
          experiences.
        </Introduction>

        <Introduction>
          Not long after graduating from college, I aspire to join a team where
          I can contribute on a huge variety of colourful and meaningful
          projects every day!
        </Introduction>

        <Introduction>
          Here are a few technologies I've been playing with recently:
        </Introduction>

        <SkillsContainer>
          <Skill>JavaScript ES6</Skill>
          <Skill>React</Skill>
          <Skill>Git</Skill>
          <Skill>HTML & CSS</Skill>
          <Skill>Styled-Components</Skill>
          <Skill>Neo4j</Skill>
        </SkillsContainer>
      </IntroContainer>
      <TommyPhoto src={tommy} alt="Tommy" />
      <SocialMediaContainer>
        <GithubIcon></GithubIcon>
        <TwitterIcon></TwitterIcon>
        <LinkedinIcon></LinkedinIcon>
      </SocialMediaContainer>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2vw;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Introduction = styled.main`
  padding: 1vw;
  font-size: 20px;
  text-align: justify;
  color: dimgray;
`;

const SkillsContainer = styled.ul`
  margin-top: 1vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  grid-gap: 1vw;
`;

const Skill = styled.li`
  font-size: 18px;
  font-weight: bold;
  &:before {
    content: "✨";
    padding-right: 8px;
    /* color: blue; */
  }
`;

const Greeting = styled.header`
  padding: 2vw;
  font-size: 5vw;
  color: ${COLORS.primary};
`;

const TommyPhoto = styled.img`
  width: 25vw;
  border-radius: 10px;
`;

const SocialMediaContainer = styled.div`
  /* grid-column: 1/3; */
  display: flex;
  /* position: absolute; */
  /* bottom: 0px; */
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 20vw;
  bottom: 1vw;
`;

const GithubIcon = styled(AiOutlineGithub)`
  width: 3vw;
  height: auto;

  &:hover {
    color: mediumorchid;
  }
`;

const TwitterIcon = styled(AiOutlineTwitter)`
  width: 3vw;
  height: auto;
  margin: 20px;

  &:hover {
    color: #00acee;
  }
`;

const LinkedinIcon = styled(AiFillLinkedin)`
  width: 3vw;
  height: auto;

  &:hover {
    color: #0e76a8;
  }
`;
