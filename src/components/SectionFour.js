import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 14%;
  height: 1521px !important;
  @media screen and (max-width: 600px) {
    margin-top: 232%;
    height: 1232px !important;
  }
  p {
    @media screen and (max-width: 600px) {
      margin-left: 0%;
      width: 44%;
  }
  .columns {
    margin-right:0rem !important;
  }
`;

const From = styled.div`
  width: 100%;
  font-family: sans-serif;
  margin-top: 20%;
  margin-left: 15% !important;
  @media screen and (max-width: 600px) {
    font-family: sans-serif;
    margin-top: 6%;
    margin-left: 2% !important;
  }
  .control {
    width: 48% !important;
    border: 1px solid groove !important;
  }
  .field {
    margin-top: 12px;
  }
  .button {
    margin-right: 52%;
    margin-top: 2%;
    border-radius: 21px;
    height: 47px !important;
    width: 230px;
    font-size: 15px !important;
    @media screen and (max-width: 600px) {
    margin-right: 65%;
    margin-top: 2%;
    }
  .icon {
    margin-left: 12px !important;
    font-size: 10px;
  }
`;
const SectionFour = () => (
  <Container className="section">
    <div className="columns">
      <div className="column is-two-fifths">
        <img src="/images/cameraman.jpg" className="Image" alt="back-to-top" />
      </div>
      <div className="column is-centered">
        <From>
          {' '}
          <h1 className="title has-text-left-mobile">Send me message</h1>
          <p className="is-size-7 has-text-grey has-text-centered-mobile">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.
          </p>
          <div className="control">
            <input
              className="input is-size-6"
              type="your name"
              placeholder="your name"
            />
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input is-size-6"
                type="email"
                placeholder=" Enter Email address"
              />
            </p>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Message" />
            </div>
          </div>
          <a className="button is-pulled-right is-size-6">
            CONFIRM BOOKING <i className="icon fas fa-arrow-right" />
          </a>
        </From>
      </div>
    </div>
  </Container>
);

export default SectionFour;
