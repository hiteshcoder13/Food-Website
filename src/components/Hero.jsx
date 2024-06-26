import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>Everything is better with a <span>Pizza</span></h1>
      <p>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
      <div className="hero-buttons">
        <button className="order-now">Order Now</button>
        <button className="learn-more">Learn more</button>
      </div>
    </div>
    <div className="hero-image">
      <img src="https://static.vecteezy.com/system/resources/previews/025/446/386/non_2x/tasty-top-view-pizza-italian-traditional-round-pizza-white-background-ai-generative-free-photo.jpg" alt="Pizza" />
    </div>
  </section>
);

export default Hero;
