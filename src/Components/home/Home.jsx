import React from 'react';
import Slider from './slider';
import './home.scss';

const Home = ()=>(
    <div className="home">
        <Slider/>
        <h2>We have what you need.</h2>
        <div className="home_body">
            <div className="body_buy_rent">
                <a href="">Buy property</a>
                <a href="">Rent property</a>
            </div>  
            <div className="body_benefits">
               <div className="body_benefits_img">
                   <img src="images/benefits.jpg" alt=""/>
               </div>
               <div className="body_benefits_text">
                    <h2>Our Benefits</h2>
                    <p>PROFITABLE OFFER</p>
                    <p>GROWING BASE OF OBJECTS</p>
                    <p>CONVENIENCE</p>
                    <p>EASY TO FIND US</p>
               </div>
            </div>     
            <div className="body_deal">
                <div className="body_deal_item">
                   <span>&#9745;</span>
                   <h2>250</h2>
                   <p>DEALS</p>
                </div>
                <div className="body_deal_item">
                   <span>&#9786;</span>
                   <h2>320</h2>
                   <p>SATISFIED CUSTOMERS</p>
                </div>
                <div className="body_deal_item">
                   <span>&#10066;</span>
                   <h2>140</h2>
                   <p>OBJECTS</p>
                </div>
                <div className="body_deal_item">
                   <span>&#36;</span>
                   <h2>152 871</h2>
                   <p>SUM OF SALES AND SHOPPING</p>
                </div>
            </div>        
        </div>
    </div> 
);

export default Home;