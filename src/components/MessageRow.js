import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100% !important;
  padding: 0px !important;
  height: 146px;
  margin-top: 13px;
  @media screen and (max-width: 600px) {
    margin-top: 0%;
  }
}
  .title {
    padding-top: 3%!important;
    padding-left: 19%;
    font-family: sans-serif !important;
    @media screen and (max-width: 600px) {
    padding-top: 7%!important;
    }
  }
`;

const Button = styled.a`
  width: 200px;
  height: 53px;
  margin-top: 11%;
  margin-right: 32%;
  border-radius: 26px;
  @media screen and (max-width: 600px) {
    width: 157px;
    height: 38px;
    margin-top: -10%;
    margin-right: 25%;
  }
`;

const MessageRow = () => (
  <Container className="has-background-info">
    <div className="columns">
      <div className="column">
        <h1 className="title is-size-3 has-text-white is-size-6-mobile">
          NOT SURE ABOUT MY CHARGE?
        </h1>
      </div>
      <div className="column is-one-fifth">
        {' '}
        <Button
          className="button is-pulled-right"
          href="https://bulma.io/documentation/layout/tiles/#3-columns"
        >
          DONATE KNOW
        </Button>
      </div>
    </div>
  </Container>
);

export default MessageRow;
