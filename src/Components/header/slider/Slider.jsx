import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class SimpleSlider extends Component {
  render() {
    return (
       <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} className="slider_item" >
                <div className="slider_item">
                    <img src="images/first_slider.jpg" />					
                </div>
                <div>
                    <img src="images/second_slider.jpg" />
                </div>
                <div>
                    <img src="images/third_slider.jpg"/>         
                </div>
            </Carousel> 
    );
  }
}