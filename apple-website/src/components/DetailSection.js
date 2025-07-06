import React from "react";
import styled from "styled-components";
import img1 from "../assets/detail1.jpeg";
import img2 from "../assets/detail2.jpeg";
import img3 from "../assets/detail3.jpeg";

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  font-family: 'Arial', sans-serif;
`;

const BigText = styled.h1`
  font-size: 6.5rem;
  margin-bottom: 4rem;
  color: #cecece;
  font-family: 'SF Pro', sans-serif;
  text-align: left;
  line-height: 1.2;
  margin-left: 200px;
  word-spacing: -8px;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

const StyledImage = styled.img`
  width: 350px;
  height: auto;
`;

const Caption = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #ffb6ff, #b344ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0;
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.5rem;
  line-height: 1.2; 
  display: inline-block;
  margin-top: 0;
`;

const DetailSection = () => {
  return (
    <Section>
      <BigText>Much more detail.<br/>
      In much less light.</BigText>
      <ImageRow>
        <ImageWrapper>
          <StyledImage src={img1} alt="Image 1" />
          <Caption>
            <SubText>Up to</SubText>
            <GradientText><br/>3x better<br/>low-light photos<br/></GradientText>
            <SubText>
              on the Ultra Wide camera
            </SubText>
          </Caption>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={img2} alt="Image 2" />
          <Caption>
            <SubText>Up to</SubText>
            <GradientText><br/>2x better<br/>low-light photos<br/></GradientText>
            <SubText>
              on the Main camera
            </SubText>
          </Caption>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={img3} alt="Image 3" />
          <Caption>
            <SubText>Up to</SubText>
            <GradientText><br/>2x better<br/>low-light photos<br/></GradientText>
            <SubText>
              on the Telephoto camera
            </SubText>
          </Caption>
        </ImageWrapper>
      </ImageRow>
    </Section>
  );
};

export default DetailSection;
