import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100% !important;
  height: 917px;
  margin-top: 2%;
`;

const Images = styled.img`
  width: 98% !important;
  @media screen and (max-width: 600px) {
    margin-top: 14%;
  }
  :hover {
    width: 103% !important;
    height: 53%;
  }
`;

const ComnentBox = styled.div`
  width: 100%;
  border: 1px solid black;
  border-left: hidden;
  border-right: hidden;
  h5 {
    margin-right: 35%;
    margin-top: 11%;
    @media screen and (max-width: 600px) {
      margin-right: 61%;
      margin-top: 4px;
}
  }
  .para {
    margin-top: 10%;
    @media screen and (max-width: 600px) {
      margin-top: -12%;
      float: right;
      margin-right: 5%;
}
`;

const WomanImage = styled.img`
  margin-top: 6%;
  @media screen and (max-width: 600px) {
    margin-top: 2px;
    width: 34px !important;
    height: 21px !important;
    margin-left: 5px;
  }
`;

const SectionFive = () => (
  <Container className="section has-background-light">
    <h1 className="title is-size-3 has-text-black has-text-centered has-text-weight-semibold">
      Our Recent Blogs
    </h1>
    <p className="para has-text-centered has-text-grey is-size-7-mobile">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut<br /> labore et dolore magna aliqua.
    </p>
    <div className="container">
      <div className="columns">
        <div className="column">
          {' '}
          <Images
            src="/images/handimage.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="title is-size-4 has-text-weight-semibold is-size-5-mobile">
            PORTABLE FASHION FOR YOUNG WOMEN
          </h1>
          <p className="para is-size-7 has-text-grey ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
            ullamco laboris nisi ut aliquip exea.<br /> commodo consequat. Duis
            aute irure dolor in <br />reprehenderit in voluptate velit esse
            cillum dolore eu <br />fugiat nulla pariatur.
          </p>
          <ComnentBox>
            <div className="columns">
              <div className="column">
                <WomanImage
                  src="/images/womanImage.png"
                  className="image is-32x32 is-pulled-left"
                  alt="back-to-top"
                />
                <h5 className="has-text-black-ter is-pulled-right">
                  Mark wisen
                </h5>
              </div>
              <div className="column">
                <p className="para has-text-grey is-size-7">
                  13th Dec&nbsp;&nbsp;<i className="far fa-heart" />&nbsp;15{' '}
                  &nbsp; <i className="far fa-comment" />&nbsp;04
                </p>
              </div>
            </div>
          </ComnentBox>
        </div>
        <div className="column">
          <Images src="/images/bpimg.png" className="Image" alt="back-to-top" />
          <h1 className="title is-size-4 has-text-weight-semibold is-size-5-mobile">
            SUMMER WARE ARE COMING
          </h1>
          <p className="para is-size-7 has-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
            ullamco laboris nisi ut aliquip exea.<br /> commodo consequat. Duis
            aute irure dolor in <br />reprehenderit in voluptate velit esse
            cillum dolore eu <br />fugiat nulla pariatur.
          </p>
          <ComnentBox>
            <div className="columns">
              <div className="column">
                <WomanImage
                  src="/images/womanImage.png"
                  className="image is-32x32 is-pulled-left"
                  alt="back-to-top"
                />
                <h5 className="has-text-black-ter is-pulled-right">
                  Mark wisen
                </h5>
              </div>
              <div className="column">
                {' '}
                <p className="para has-text-grey is-size-7">
                  13th Dec&nbsp;&nbsp;<i className="far fa-heart" />&nbsp;15{' '}
                  &nbsp; <i className="far fa-comment" />&nbsp;04
                </p>
              </div>
            </div>
          </ComnentBox>
        </div>
        <div className="column">
          <Images
            src="/images/handimage.png"
            className="Image"
            alt="back-to-top"
          />
          <h1 className="title is-size-4 has-text-weight-semibold ">
            SUMMER WARE ARE COMING
          </h1>
          <p className="para is-size-7 has-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <ComnentBox>
            <div className="columns">
              <div className="column">
                <WomanImage
                  src="/images/womanImage.png"
                  className="image is-32x32 is-pulled-left"
                  alt="back-to-top"
                />
                <h5 className="has-text-black-ter is-pulled-right">
                  Mark wisen
                </h5>
              </div>
              <div className="column">
                {' '}
                <p className="para has-text-grey is-size-7">
                  13th Dec&nbsp;&nbsp;<i className="far fa-heart" />&nbsp;15{' '}
                  &nbsp; <i className="far fa-comment" />&nbsp;04
                </p>
              </div>
            </div>
          </ComnentBox>
        </div>
      </div>
    </div>
  </Container>
);

export default SectionFive;
