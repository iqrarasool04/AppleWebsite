import React, { useState } from 'react';
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
  z-index: 999;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #1d1d1f;
    padding: 1rem 2rem;
    gap: 1rem;
    animation: slideDown 0.3s ease-in-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  white-space: nowrap;
`;

const MenuItem = styled.span`
  color: white;
  cursor: pointer;
  font-size: 0.95rem;
  transition: opacity 0.2s ease;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </MobileMenuIcon>
      </Nav>

      <DropdownMenu open={menuOpen}>
        <MenuItem>Overview</MenuItem>
        <MenuItem>Awesome Templates</MenuItem>
        <MenuItem>WeDoFlow.com</MenuItem>
        <Button>Clone Apple.com</Button>
      </DropdownMenu>
    </>
  );
};

export default Navbar;
