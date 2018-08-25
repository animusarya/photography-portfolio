import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100% !important;
  height: 917px;
  margin-top: 2%;
  .subtitle {
    padding-top: 15%;
    font-family: sans-serif;
    padding-left: 9%;
  }
  .icon {
    margin-left: 5% !important;
    height: 47%;
    color: inherit;
  }
  .para1 {
    padding-left: 9% !important;
  }
`;

const Coverimage = styled.img`
  width: 68% !important;
  height: 100%;
  margin-top: 6%;
  margin-left: 24%;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    margin-left: 16%;
  }
`;

const Button = styled.a`
  width: 19% !important;
  margin-top: 4%;
  border-radius: 25px;
  font-size: 15px;
  height: 8%;
  margin-left: 9% !important;
  @media screen and (max-width: 600px) {
    width: 55% !important;
    font-size: 13px;
  }
`;

const SectionOne = () => (
  <Container className="section has-background-light">
    <div className="columns">
      <div className="column is-two-fifths">
        <Coverimage
          src="/images/moivecAMERA.jpg"
          className="Image"
          alt="back-to-top"
        />
      </div>
      <div className="column">
        <h1 className="subtitle is-size-2 has-text-black has-text-weight-semibold ">
          We Believe that <br /> Interior beautifies the
        </h1>
        <p className="para1 has-text-grey">
          the is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has <br /> been the standard dummy text ever since the
          1500s, when an unknown printer took
          <br /> a galley of type and scrambled it to make a type specimen book.
          It has survived not
          <br /> only five centuries, but also the leap into electronic
          typesetting, remaining essentially
          <br /> unchanged. It was popularised in the 1960s with the release
          remaining essentially
          <br /> a galley of type and scrambled it to make a type specimen book.
          It has survived not
        </p>
        <Button className="button">
          HIRE ME KNOW <i className="icon fas fa-arrow-right" />
        </Button>
      </div>
    </div>
  </Container>
);

export default SectionOne;
