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
`;

const SmallText = styled.p`
  font-size: 2.5rem;
  color: #cecece;
  font-weight: bold;
  margin: 0;
  text-align: center;
  text-align: left;
  margin-left: 23rem;
`;

const SmallText1 = styled.p`
  font-size: 3rem;
  color: #cecece;
  font-weight: bold;
  margin: 0;
  text-align: left;
  margin-left: 14rem;
`;

const LargeText = styled.h1`
  font-size: 13vw;
  line-height: 1.1;
  text-align: left;
  color: #cecece;
  font-weight: 700;
  font-family: 'SF Pro', sans-serif;
  margin: 0.2rem 0 2rem 0; 
  text-align: center;
`;

const IndentedLine = styled.span`
  display: block;
  margin-left: 6rem;
`;

const Video = styled.video`
  width: 95vw;               
  max-width: 1800px;         
  aspect-ratio: 16 / 9;      
  border-radius: 8px;
  background: black;         
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
