import React from "react";
import styled from "styled-components";
import image from "../assets/image6.jpeg";

const Section = styled.section`
  background-color: black;
  color: white;
  font-family: 'SF Pro', sans-serif;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
`;

const Column = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const CenterColumn = styled(Column)`
  margin-top: -60px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;
  color: #cecece;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #cecece;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #444;
  margin: 0.5rem 0 1rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #ccc;

  li {
    margin-bottom: 0.8rem;
  }
`;

const LargeImage = styled.img`
  width: 80%;
  max-width: 1000px;
  height: auto;
  margin-top: 2rem;
  border-radius: 10px;
`;

const ListSection = () => {
  return (
    <Section>
      <ColumnsWrapper>
        <Column>
          <Title>Main</Title>
          <SubTitle>48MP for up to<br />4x the resolution</SubTitle>
          <Divider />
          <List>
            <li>24 mm</li>
            <li>48 mm (2x Telephoto)</li>
            <li>Quad-pixel sensor</li>
            <li>2.44 µm quad pixel</li>
            <li>1.22 µm single pixel</li>
            <li>ƒ/1.78 aperture</li>
            <li>100% Focus Pixels</li>
            <li>7-element lens</li>
            <li>Sensor-shift OIS</li>
          </List>
        </Column>

        <CenterColumn>
          <Title>Telephoto</Title>
          <SubTitle>Up to 2x better<br />low-light photos</SubTitle>
          <Divider />
          <List>
            <li>24 mm</li>
            <li>48 mm (2x Telephoto)</li>
            <li>Quad-pixel sensor</li>
            <li>2.44 µm quad pixel</li>
            <li>1.22 µm single pixel</li>
          </List>
        </CenterColumn>

        <Column>
          <Title>Main</Title>
          <SubTitle>Sharper, brighter<br />macro shots</SubTitle>
          <Divider />
          <List>
            <li>24 mm</li>
            <li>48 mm (2x Telephoto)</li>
            <li>Quad-pixel sensor</li>
            <li>2.44 µm quad pixel</li>
            <li>1.22 µm single pixel</li>
            <li>ƒ/1.78 aperture</li>
          </List>
        </Column>
      </ColumnsWrapper>

      <LargeImage src={image} alt="Camera Showcase" />
    </Section>
  );
};

export default ListSection;
