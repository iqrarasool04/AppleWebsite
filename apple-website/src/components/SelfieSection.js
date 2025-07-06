import React from "react";
import styled from "styled-components";
import image from "../assets/selfie.jpeg";

const Section = styled.section`
  background-color: black;
  color: white;
  font-family: 'SF Pro', sans-serif;
  padding: 6rem 2rem 0 2rem;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const LargeText = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  font-family: 'SF Pro', sans-serif;
  color: #cecece;
  max-width: 60%;
  text-align: right;
  margin-left: 4rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const SmallText = styled.p`
  font-size: 2rem;
  font-family: 'SF Pro', sans-serif;
  color: #cecece;
  max-width: 35%;
  margin-right: 6rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    margin: 0 auto;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  margin-top: 4rem;
  display: block;
  margin-left: 10rem;

  @media (max-width: 1024px) {
    margin-left: 5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SelfieSection = () => {
  return (
    <Section>
      <TextRow>
        <LargeText>
          A camera in<br />
          a class by<br />
          itselfie.
        </LargeText>
        <SmallText>
          Snap your sharpest, most<br />
          colorful close-ups and group<br />
          shots, thanks to a new<br />
          TrueDepth front camera with<br />
          autofocus and a larger<br />
          aperture.
        </SmallText>
      </TextRow>
      <Image src={image} alt="selfie" />
    </Section>
  );
};

export default SelfieSection;
