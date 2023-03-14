import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Images/logo1.png";

const Section = styled.section`
  min-height: 65vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;

  @media (max-width: 70em) {
    min-height: 200vh;
  }
  @media (max-width: 48em) {
    height: 250vh;
    
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15vw;
    height: auto;
  }

  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
      margin-top: -13vh;
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 70vw;
    height: 217vh;
    
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
  h1{
    background: linear-gradient(to right, #f32170,
      #ff6b08, #cf23cf, #eedd44);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
font-size: 40px;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
        />
        <h3 data-scroll data-scroll-speed="-1">
          One Login One Auth
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            Home
          </li>
           <li aria-hidden="true" onClick={() => handleScroll(".Register")}>
            Register/Login
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#OurApproach")}>
            Overview
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            References
          </li>
          {/* <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              Look
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              reviews
            </a>
          </li> */}
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            {/* &copy; 2022. All Rights Reserved. */}
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Developed By Team <h1>HackTheHustle</h1>
            {/* <a
              href="http://youtube.com/codebucks"
              target={"_blank"}
              rel="noreferrer"
            > */}

              
            {/* </a> */}
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
