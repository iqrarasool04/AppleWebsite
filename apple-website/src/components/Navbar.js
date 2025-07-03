import React from 'react';
import styled from 'styled-components';
import appleLogo from "../assets/apple.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #1d1d1f;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.90rem;
  cursor: pointer;
`;

const Button = styled.button`
  background: #0071e3;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Logo src={appleLogo} alt="Apple logo" />
        iPhone 14 pro
      </NavLeft>
      <NavRight>
        <span>Overview</span>
        <span>Awesome Templates</span>
        <span>WeDoFlow.com</span>
        <Button>Clone Apple.com</Button>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
