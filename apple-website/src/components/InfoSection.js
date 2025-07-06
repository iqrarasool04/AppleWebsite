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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 15px;
  padding: 2rem;
  pointer-events: all;
`;

const SubHeaderHolder = styled.div`
  color: #000;
  font-size: 10rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 20px;
`;

const SubHeader = styled.div`
  color: #000;
`;

const InfoParagraph = styled.p`
  color: #000;
  font-size: ${(props) => (props.small ? "1.5rem" : "1.75rem")};
  margin: 0.5rem 0;
`;

const LinkHolder = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
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
`;

const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const IntroImage = styled.img`
  width: 100%;
  height: 1000px;
  object-fit: cover;
  display: block;

  &.flipped {
    transform: scaleY(-1);
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
            <InfoParagraph>iPhone 14 Pro and iPhone 14 Pro Max</InfoParagraph>
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

