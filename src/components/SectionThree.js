import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';

const Container = styled.section`
  width: 100% !important;
  background-color: #222222 !important;
  font-family: sans-serif;
  @media screen and (max-width: 600px) {
    margin-top: 68%;
  }
`;

const Imgsection = styled.div`
  width: 70% !important;
  margin-left: 15%;
`;

const SectionThree = () => (
  <Container className="section has-background-light">
    <div className="title has-text-centered has-text-white">
      My Recent Photos
    </div>
    <p className="para has-text-centered has-text-grey is-size-7-mobile has-text-centered-mobile">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut<br /> labore et dolore magna aliqua.
    </p>
    <Imgsection>
      <Gallery />
    </Imgsection>
  </Container>
);

export default SectionThree;
