import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleShowMenu = (event) => {
    event.preventDefault();
    setShowMenu(true);
    setShowCheckout(false);
  };

  const handleShowCheckout = () => {
    setShowCheckout(true);
    setShowMenu(false);
  };

  const handleScrollToSection = (sectionRef) => {
    setShowMenu(false);
    setShowCheckout(false);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="App">
      <Navbar 
        onShowMenu={handleShowMenu} 
        onScrollToSection={handleScrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        contactRef={contactRef}
        cartItems={cartItems}
        onShowCheckout={handleShowCheckout}
      />
      {!showMenu && !showCheckout && (
        <>
          <div ref={homeRef}><Hero /></div>
          <BestSellers onShowMenu={handleShowMenu}  />
          <div ref={aboutRef}><AboutUs /></div>
          <div ref={contactRef}><ContactUs /></div>
         
        </>
      )}
      {showMenu && <Menu onAddToCart={handleAddToCart} />}
      {showCheckout && <Checkout cartItems={cartItems} />}
    </div>
  );
};

export default App;
