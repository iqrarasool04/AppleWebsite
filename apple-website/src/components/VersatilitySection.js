import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";

// ...imports

const Section = styled.section`
  background-color: black;
  color: white;
  min-height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LargeText = styled.div`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  text-indent: 3rem;
  max-width: 90%;
  line-height: 1.2;
  color: #cecece;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
    text-indent: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-indent: 0;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 600px;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

const Img = styled.img`
  position: absolute;
  object-fit: cover;
`;

const Img1 = styled(Img)`
  width: 300px;
  height: 450px;
  left: 130px;
  top: 50px;

  @media (max-width: 1024px) {
    width: 220px;
    height: 330px;
    left: 80px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 270px;
    left: 40px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 200px;
    left: 10px;
  }
`;

const MotionImg2Wrapper = styled.div`
  position: absolute;
  left: 30%;
  top: 60px;
  z-index: 3;
  width: 350px;
  height: 530px;
  overflow: visible;

  @media (max-width: 1024px) {
    width: 260px;
    height: 400px;
    left: 28%;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 340px;
    left: 25%;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 270px;
    left: 20%;
  }
`;

const MotionImg2 = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Img3 = styled(Img)`
  width: 300px;
  height: 400px;
  left: 650px;
  top: 0;
  z-index: 4;

  @media (max-width: 1024px) {
    width: 220px;
    height: 300px;
    left: 60%;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 250px;
    left: 60%;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 180px;
    left: 60%;
  }
`;

const MotionImg4 = styled(motion.img)`
  position: absolute;
  width: 280px;
  height: 220px;
  right: 200px;
  top: 200px;
  z-index: 1;
  transform: translateX(75%);
  object-fit: cover;

  @media (max-width: 768px) {
    width: 180px;
    height: 140px;
    right: 100px;
    top: 180px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 100px;
    right: 60px;
    top: 150px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  width: 100%;
  padding: 6rem 2rem;
  margin-top: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const MotionTextBlock = styled(motion.div)`
  flex: 1;
  color: #cecece;
  font-size: 2rem;
  line-height: 1.2;
  padding-top: 30rem;
  margin-left: 8rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 500;

  @media (max-width: 1024px) {
    margin-left: 4rem;
    padding-top: 20rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 0;
    font-size: 1.6rem;
    margin-top: 10rem; /* 
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 10rem; 
  }
`;

const MotionImg5 = styled(motion.img)`
  width: 280px;
  height: 200px;
  object-fit: cover;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 220px;
    height: 160px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 120px;
  }
`;

const VersatilitySection = () => {
  const img2Ref = useRef(null);
  const img5Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: img2Ref,
    offset: ["start center", "end center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const { scrollYProgress: scrollY5 } = useScroll({
    target: img5Ref,
    offset: ["start center", "end center"],
  });

  const y5 = useTransform(scrollY5, [0, 1], [0, 200]); 
  const yText = useTransform(scrollY5, [0, 1], [0, -100]); 

  return (
    <Section>
      <LargeText>
        The picture
        <br />
        of versatility.
      </LargeText>

      <ImageWrapper>
        <Img1 src={img1} alt="Image 1" />
        <MotionImg2Wrapper ref={img2Ref}>
          <MotionImg2 style={{ x, y }} src={img2} alt="Image 2" />
        </MotionImg2Wrapper>
        <Img3 src={img3} alt="Image 3" />
        <MotionImg4 style={{ y: y4 }} src={img4} alt="Image 4" />
      </ImageWrapper>

      <ContentSection ref={img5Ref}>
        <MotionTextBlock style={{ y: yText }}>
          <p>
            The new Pro camera<br />
            system adds a 2x<br />
            optical-quality<br />
            Telephoto to its zoom<br />
            range, putting tons of<br />
            framing flexibility in<br />
            your pocket. Up your<br />
            frame game.
          </p>
        </MotionTextBlock>
        <MotionImg5 style={{ y: y5 }} src={img5} alt="Image 5" />
      </ContentSection>
    </Section>
  );
};

export default VersatilitySection;

