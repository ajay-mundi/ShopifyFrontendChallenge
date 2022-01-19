import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  /*margin-top:-80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  max-width: 100%;
  padding: 0 24px;
  background-color: black;
  opacity: 100%;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  font-family: "Lucinda Console";
  display: flex;
  align-items: flex;
  margin-left: 24px;
  font-weight: bold;
  margin-top: 25px;
  text-decoration: none;

  @media screen and (max-width: 1024px) {
    margin-left: 5px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  aling-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1024px) {
    dislay: none;
  }
`;

export const NavItem = styled.li`
  margin-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;

  &.active {
    border-bottom: 4px solid white;
    transition: 0.3s;
  }

  :hover {
    border-bottom: 4px solid white;
    transition: 0.2s;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Spacestagram</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">My Feed</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/About_Us">About Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
