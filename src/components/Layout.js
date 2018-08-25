import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';
import './layout.css';

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  font-family: sans-serif;
`;

const IndexLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Header />
    <Container className="Container">{children}</Container>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
