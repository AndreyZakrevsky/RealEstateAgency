import React, { Component } from "react";
import './slider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class SimpleSlider extends Component {
  render() {
    return (
       <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} className="slider_item" >
                <div className="slider_item">
                    <img src="fakeDB/slider/images/first_slider.jpg" alt="Slider" />					
                </div>
                <div>
                    <img src="fakeDB/slider/images/second_slider.jpg" alt="Slider" />
                </div>
                <div>
                    <img src="fakeDB/slider/images/third_slider.jpg" alt="Slider" />         
                </div>
            </Carousel> 
    );
  }
}