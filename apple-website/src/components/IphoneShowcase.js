import React, { useEffect, useState } from "react";
import styled from "styled-components";
import deepPurple from "../assets/deep-purple.jpeg";
import gold from "../assets/gold.jpeg";
import silver from "../assets/silver.jpeg";
import spaceBlack from "../assets/space-black.jpeg";

const colors = [
  { name: "Deep Purple", image: deepPurple },
  { name: "Gold", image: gold },
  { name: "Silver", image: silver },
  { name: "Space Black", image: spaceBlack },
];

const Container = styled.div`
  background-color: black;
  min-height: 200vh;
  color: white;
  padding: 20rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 10rem;
  }

  @media (max-width: 480px) {
    padding-top: 6rem;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ImageWrapper = styled.div`
  width: 500px;
  height: 800px;
  position: relative;

  @media (max-width: 1024px) {
    width: 350px;
    height: 600px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 450px;
  }
`;

const IphoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ColorOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const ColorName = styled.div`
  font-size: 1.3rem;
  color: ${(props) => (props.active ? "#ffffff" : "#aaaaaa")};
  transition: color 0.5s ease;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.div`
  margin-top: 3rem;
  font-size: 2rem;
  color: #ccc;
  line-height: 1.4;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const IphoneShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <RowWrapper>
        <ImageWrapper>
          {colors.map((color, index) => (
            <IphoneImage
              key={color.name}
              src={color.image}
              alt={color.name}
              active={index === activeIndex}
            />
          ))}
        </ImageWrapper>

        <ColorOptions>
          {colors.map((color, index) => (
            <ColorName key={color.name} active={index === activeIndex}>
              {color.name}
            </ColorName>
          ))}
        </ColorOptions>
      </RowWrapper>

      <Description>
        <p>Designed for durability.</p>
        <p>
          With Ceramic Shield, tougher than any <br /> smartphone glass.
          Water resistance. <br /> Surgical-grade stainless steel.
          6.1" and <br /> 6.7" display sizes. All in four Pro <br /> colors.
        </p>
      </Description>
    </Container>
  );
};

export default IphoneShowcase;
