import React, { Component } from 'react';
import './AboutUs.css';
import background from "./image.png";


class ContentRating extends Component {
    constructor() {
        super();
    }
    render() {
        
        return (
            <>
                <div class="mainPage">
                    <div class="left-part">
                        <h1>Welcome to Paradise Nursury</h1>

                        <button type="button">Get Started</button>
                    </div>
                    <div class="right-part">
                        <p> Welcome to Paradise Nursery Online Shopping!
                            We are your one-stop destination for all your gardening needs.
                            Whether you're a seasoned gardener or just starting out, we have
                            everything you need to create a beautiful and thriving garden.
                            From a wide selection of plants, flowers, and trees to high-quality
                            gardening tools and accessories, we are committed to providing you
                            with the best products and exceptional customer service.

                            Explore our extensive collection and let us help you bring your gardening dreams to life!</p>
                    </div>
                </div>
               
                
            </>
          
        );
    }
}

export default ContentRating;