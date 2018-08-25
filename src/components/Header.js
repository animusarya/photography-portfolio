import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #222222 !important;
  .navbar-burger {
    display: inherit;
  }
  @media screen and (max-width: 600px) {
    width: 55% !important;
  }
`;

const Header = () => (
  <Container
    id="navMenu"
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <i className="fas fa-camera-retro is-size-3" />
        </a>
        <div id="navbar-burger-id" className="navbar-burger is-pulled-right">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navbar-menu-id" className="navbar-menu">
        <div className="navbar-start" />
        <div className="navbar-end">
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            HOME
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            ABOUT ME
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            GALLERY
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            BLOG
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            CONTACT
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            GENERIC
          </a>
          <a
            className="navbar-item is-size-7 has-text-white"
            href="https://bulma.io/"
          >
            ELEMENTS
          </a>
        </div>
      </div>
    </div>
  </Container>
);
export default Header;
