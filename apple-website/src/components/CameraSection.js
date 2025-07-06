import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import iphone5 from "../assets/iphone5.mp4";

const Section = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallText = styled.p`
  font-size: 2.5rem;
  color: #cecece;
  font-weight: bold;
  margin: 0;
  text-align: left;
  margin-left: 23rem;
  align-self: flex-start;

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-left: 10rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-left: 1.5rem;
  }
`;

const SmallText1 = styled.p`
  font-size: 3rem;
  color: #cecece;
  font-weight: bold;
  margin: 0;
  text-align: left;
  margin-left: 14rem;
  align-self: flex-start;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-left: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-left: 1rem;
  }
`;

const LargeText = styled.h1`
  font-size: 13vw;
  line-height: 1.1;
  color: #cecece;
  font-weight: 700;
  font-family: 'SF Pro', sans-serif;
  margin: 0.2rem 0 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12vw;
  }

  @media (max-width: 480px) {
    font-size: 14vw;
  }
`;

const IndentedLine = styled.span`
  display: block;
  margin-left: 6rem;

  @media (max-width: 1024px) {
    margin-left: 4rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`;

const Video = styled.video`
  width: 95vw;
  max-width: 1800px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: black;
  margin-top: 2rem;

  @media (max-width: 768px) {
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    border-radius: 4px;
  }
`;

const CameraSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          observer.unobserve(videoRef.current);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <Section>
      <SmallText1>The Pro camera system gets</SmallText1>
      <LargeText>
        massively<br />
        <IndentedLine>more Pro.</IndentedLine>
      </LargeText>
      <SmallText>
        Introducing the all-new<br />
        48MP Main camera with an<br />
        advanced quad-pixel sensor.
      </SmallText>
      <Video
        ref={videoRef}
        src={iphone5}
        muted
        playsInline
        controls={false}
      />
    </Section>
  );
};

export default CameraSection;
