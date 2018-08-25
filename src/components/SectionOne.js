import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`

}
.slick-next {
    top: 50%;
    width: 34px;
    height: 57px;
    right: 1%;
    color: white;
    font-weight: 800!important
  }
  .slick-prev {
    top: 50%;
    width: 34px;
    height: 57px;
    left: 1px!important;
    z-index: 300;
    color: white;
  }
`;

const SliderContant = styled.div`
  float: right !important;
  position: relative;
  z-index: 700;
  margin-top: -12%;
  margin-right: 10%;
  @media screen and (max-width: 600px) {
  float: right !important;
  position: relative;
  z-index: 700;
  }
  h2 {
  font-family: sans-serif !important;
  font-size: 35px !important;
  @media screen and (max-width: 600px) {
    font-size: 15px !important;
    margin-top: -21%!important;
    float:right;
  }
`;
const Para = styled.p`
@media screen and (max-width: 600px) {
  font-size: 10px!important;
  margin-top: -12%!important;
  float:right;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      nextArrow: <img src="/images/next.svg" alt="next-arrow" />,
      prevArrow: <img src="/images/prev.svg" alt="prev-arrow" />,
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <img
              src="/images/profileImage.jpg"
              className="Image"
              alt="back-to-top"
            />
            <SliderContant className="is-pulled-right has-text-white ">
              <h2>WILDLIFE PHOTOGRAPHY</h2>
              <Para className="para has-text-right is-size-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br />tempor incididunt ut labore et dolore magna
                aliqua. Previous
              </Para>
            </SliderContant>
          </div>
          <div>
            <img src="/images/nature.jpg" className="Image" alt="back-to-top" />
            <SliderContant className="is-pulled-right has-text-white">
              <h2>WILDLIFE PHOTOGRAPHY</h2>
              <Para className="para has-text-right is-size-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br />tempor incididunt ut labore et dolore magna
                aliqua. Previous
              </Para>
            </SliderContant>
          </div>
          <div>
            <img
              src="/images/photografer.jpg"
              className="Image"
              alt="back-to-top"
            />
            <SliderContant className="is-pulled-right has-text-white">
              <h2>WILDLIFE PHOTOGRAPHY</h2>
              <Para className="has-text-right is-size-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod <br />tempor incididunt ut labore et dolore magna
                aliqua. Previous
              </Para>
            </SliderContant>
          </div>
        </Slider>
      </Container>
    );
  }
}
