import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({ onShowMenu, onScrollToSection, homeRef, aboutRef, contactRef, cartItems, onShowCheckout }) => {

  const { loginWithRedirect } = useAuth0();
  const { logout ,isAuthenticated} = useAuth0();
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
  <nav className="navbar">
    <div className="navbar-brand">ST PIZZA</div>
    <div className="navbar-links">
    <a href="/" onClick={(e) => { e.preventDefault(); onScrollToSection(homeRef); }}>Home</a>
    <a href="/" onClick={onShowMenu}>Menu</a>
    <a href="/" onClick={(e) => { e.preventDefault(); onScrollToSection(aboutRef); }}>About</a>
    <a href="/" onClick={(e) => { e.preventDefault(); onScrollToSection(contactRef); }}>Contact</a>
    </div>
    <div className="cart-icon" onClick={onShowCheckout}>
        <span id='span'>🛒</span>
        {totalCartItems > 0 && <div className="cart-counter">{totalCartItems}</div>}
      </div>
      {isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button onClick={() => loginWithRedirect()}>Log In</button>}
      
      
  </nav>
);
}
export default Navbar;
