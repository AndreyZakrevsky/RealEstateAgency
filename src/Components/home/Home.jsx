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
            <div className="body_description">
                <p>Decided to buy or sell a property? Probably, in the modern world, every person has a question of buying or selling real estate. No matter what, because we are not talking about what kind of property it is. Apartment, house, plot of land, office, building, warehouse - all this relates to real estate. Each person has a need to own or rent a different type of property, but still the most necessary is a place called home. And it may even be a small apartment, but, as the saying goes: "My home is my castle." And indeed it is! Every person, wherever he is, and whatever he does, returns home.
                But still: buy or sell?
                Buying an apartment, house, which is written above, or another property, for each is a balanced step and responsible. This applies both to those who buy their first "home" for which the necessary amount was collected for so long, and those who invest in real estate to make further profit from renting or reselling, because real estate has long been not only a home, but also an asset profitable. And clearly, no buyer wants to miscalculate with the acquisition of a house or with an investment of money. Accordingly, you need to find, select, agree, check, make a decision and buy. It seems everything sounds easy, right? But do not hurry.
                Let's take the example of an apartment, the most demanded type of real estate, try to figure out how this happens.</p>
            </div>        
        </div>
    </div> 
);

export default Home;