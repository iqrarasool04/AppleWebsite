import React from "react";
import styled from "styled-components";
import video from "../assets/action.mp4";
import phoneFrame from "../assets/case.png";

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 4rem 2rem;
  font-family: 'SF Pro', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigText = styled.h1`
  font-size: 6.5rem;
  margin-bottom: 4rem;
  color: #cecece;
  text-align: left;
  line-height: 1.2;
  margin-left: 130px;
  word-spacing: -8px;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
    margin-left: 80px;
  }

  @media (max-width: 768px) {
    font-size: 3.2rem;
    text-align: center;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const SmallTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const SmallText = styled.p`
  font-size: 2rem;
  color: #cecece;
  margin-right: 10rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin-right: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-right: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
  width: 1100px;
  height: 530px;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    width: 800px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const VideoStyled = styled.video`
  position: absolute;
  top: 2%;
  left: 1%;
  width: 100%;
  height: 97%;
  object-fit: cover;
  border-radius: 24px;
`;

const PhoneImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const BottomTextWrapper = styled.div`
  width: 80%;
  max-width: 2000px;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  color: #cecece;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftText = styled.p`
  font-size: 2rem;
  text-align: left;
  margin-left: 6rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const RightText = styled.p`
  font-size: 2rem;
  margin-right: 4rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #ffb6ff, #b344ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 2rem;
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.5rem;
  line-height: 1.2;
`;

const ActionSection = () => {
  return (
    <Section>
      <BigText>Shaky action shot?<br />Fix it in pre.</BigText>

      <SmallTextWrapper>
        <SmallText>
          Cinematic mode now shoots<br />in 4K HDR at 24fps - the<br />
          film industry standard. Have<br />your people call our people.
        </SmallText>
      </SmallTextWrapper>

      <PhoneWrapper>
        <VideoStyled src={video} autoPlay loop muted />
        <PhoneImage src={phoneFrame} alt="Phone Frame" />
      </PhoneWrapper>

      <BottomTextWrapper>
        <LeftText>
          Whether you're filming from an<br />
          off-road SUV or running alongside<br />
          your subject, try Action mode for<br />
          smooth handheld videos - no<br />
          gimbal required.
        </LeftText>
        <RightText>
          <SubText>
            The only smartphone in the<br />world that lets you
          </SubText>
          <br />
          <GradientText>
            shoot, view, edit,<br />and share in ProRes<br />or Dolby Vision HDR.
          </GradientText>
        </RightText>
      </BottomTextWrapper>
    </Section>
  );
};

export default ActionSection;
