import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import image from "../assets/image.png";

const SectionWrapper = styled.div`
  background-color: black;
  width: 100%;
  min-height: 350vh;
  position: relative;
  overflow: hidden;
`;

const StickyContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5vw;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
    padding: 1rem;
    text-align: center;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 15px;
  padding: 2rem;
  pointer-events: all;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SubHeaderHolder = styled.div`
  color: #000;
  font-size: 10rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.div`
  color: #000;
`;

const InfoParagraph = styled.p`
  color: #000;
  font-size: ${(props) => (props.small ? "1.5rem" : "1.75rem")};
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.small ? "1rem" : "1.2rem")};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.small ? "0.9rem" : "1rem")};
  }
`;

const LinkHolder = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const LinksContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #000;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LinkIcon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const IntroImage = styled.img`
  width: 100%;
  height: 1000px;
  object-fit: cover;
  display: block;

  &.flipped {
    transform: scaleY(-1);
  }

  @media (max-width: 1024px) {
    height: 700px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

const ImageScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  z-index: 1;
`;

const StackedImages = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
`;

const InfoSection = () => {
  const sectionRef = useRef(null);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowText(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <SectionWrapper ref={sectionRef}>
      {showText && (
        <StickyContent>
          <Container>
            <SubHeaderHolder>
              <SubHeader>Pro.</SubHeader>
              <SubHeader>Beyond</SubHeader>
            </SubHeaderHolder>
            <InfoParagraph>
              iPhone 14 Pro and iPhone 14 Pro Max
            </InfoParagraph>
            <InfoParagraph small>
              From $41.62/mo. for 24 mo. or $999 before trade-in
            </InfoParagraph>
            <LinkHolder>
              <LinksContainer>
                <div>Watch Film</div>
                <LinkIcon
                  src="https://assets.website-files.com/632ac258d7c654a60bc44785/632ae0c4946ddb72b810f795_arrow-right-circle.svg"
                  alt="arrow"
                />
              </LinksContainer>
              <LinksContainer>
                <div>Watch the event</div>
                <LinkIcon
                  src="https://assets.website-files.com/632ac258d7c654a60bc44785/632ae0c586a89923450c6666_chevron-right%20(4).svg"
                  alt="chevron"
                />
              </LinksContainer>
            </LinkHolder>
          </Container>
        </StickyContent>
      )}

      <ImageScrollArea>
        <StackedImages>
          <IntroImage src={image} alt="background" />
          <IntroImage src={image} alt="flipped background" className="flipped" />
        </StackedImages>
      </ImageScrollArea>
    </SectionWrapper>
  );
};

export default InfoSection;
