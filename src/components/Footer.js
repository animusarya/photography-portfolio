import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100% !important;
  background-color: #222222 !important;
  height: 96px !important;
  @media screen and (max-width: 600px) {
    margin-top: -42px;
    margin-left: -3%;
  }
  .iconheart {
    color: #7a77ff;
    margin-bottom: -2px;
  }
  b {
    color: #7a77ff;
  }
  .Icons {
    margin-left: 1%;
    font-size: 25px;
    @media screen and (max-width: 600px) {
      margin-top: -42px;
      margin-left: 1%;
    }
  }
  p {
    @media screen and (max-width: 600px) {
      margin-top: -42px;
      margin-left: 2%;
      font-size: 17px !important;
    }
  }
`;

const FooterIcons = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: -3% !important;
  }
`;

const Footer = () => (
  <Container className="section">
    <div className="columns  is-gapless">
      <div className="column is-three-fifths">
        <p className="has-text-white has-text-centered has-text-weight-light is-size-7 has-text-left-mobile">
          Copyright © 2018 All rights reserved | This template is made with{' '}
          <i className="iconheart fas fa-heart" /> by <b>Colorlib</b>
        </p>
      </div>
      <div className="column is-one-quarter">
        <FooterIcons>
          <i className="Icons fab fa-facebook" />
          <i className="Icons fab fa-twitter-square" />
          <i className="Icons fab fa-twitter-square" />
          <i className="Icons fas fa-globe" />
          <i className="Icons fab fa-behance-square" />
        </FooterIcons>
      </div>
    </div>
  </Container>
);

export default Footer;
