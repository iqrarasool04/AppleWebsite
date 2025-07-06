import React from "react";
import styled from "styled-components";
import video from "../assets/videoQuality.mp4"; 

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 4rem 2rem;
  min-height: 100vh;
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
  align-self: flex-start;

  @media (max-width: 1024px) {
    font-size: 4rem;
    margin-left: 60px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 20px;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
    margin-left: 0;
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
    margin-right: 4rem;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 1.4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Video = styled.video`
  width: 80%;
  max-width: 2000px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BottomTextWrapper = styled.div`
  width: 80%;
  max-width: 2000px;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  color: #cecece;

  @media (max-width: 1024px) {
    gap: 4rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`;

const LeftText = styled.p`
  font-size: 2rem;
  text-align: right;
  margin-left: 10rem;
  max-width: 45%;

  @media (max-width: 1024px) {
    margin-left: 0;
    font-size: 1.6rem;
    text-align: left;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const RightText = styled.p`
  font-size: 2rem;
  margin-right: 4.5rem;
  max-width: 45%;

  @media (max-width: 1024px) {
    margin-right: 0;
    font-size: 1.6rem;
    text-align: left;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
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
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.5rem;
  line-height: 1.2; 
  display: inline-block;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const VideoQuality = () => {
  return (
    <Section>
      <BigText>
        24. Breathtaking.<br />Frames. Per. Second.
      </BigText>

      <SmallTextWrapper>
        <SmallText>
          Cinematic mode now shoots<br />
          in 4K HDR at 24fps – the<br />
          film industry standard. Have<br />
          your people call our people.
        </SmallText>
      </SmallTextWrapper>

      <Video src={video} autoPlay loop muted />

      <BottomTextWrapper>
        <LeftText>
          Now you can seamlessly<br />
          edit with other pro footage in<br />
          4K at 24 or 30 fps. You can<br />
          even edit the depth effect<br />
          after capture.
        </LeftText>

        <RightText>
          <GradientText>Highest-quality video</GradientText>
          <br />
          <SubText>in a smartphone</SubText>
        </RightText>
      </BottomTextWrapper>
    </Section>
  );
};

export default VideoQuality;
