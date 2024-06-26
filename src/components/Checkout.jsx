import React, { useState } from 'react';
import './Checkout.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7Ab5KcDuh2Xc6pbAjAjLVtnfMPL9_o2U",
    authDomain: "food-webstore.firebaseapp.com",
    projectId: "food-webstore",
    storageBucket: "food-webstore.appspot.com",
    messagingSenderId: "35999371750",
    appId: "1:35999371750:web:baacd10064403b666c8627",
    measurementId: "G-HN2YZ2LNVV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Checkout = ({ cartItems }) => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [confirmation, setConfirmation] = useState(false);
  
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    const handleOrder = async () => {
      const orderDetails = {
        phone,
        address,
        postalCode,
        city,
        country,
        cartItems,
        totalPrice: totalPrice + 5,
        paymentMethod: 'Cash on Delivery'
      };
  
      try {
        await addDoc(collection(db, 'orders'), orderDetails);
        setConfirmation(true);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    };
  
    if (confirmation) {
      return (
        <div className="confirmation">
          <img src="/images/order-confirmation.png" alt="Order Confirmation" />
          <h2>Thank you!</h2>
          <p>Your order has been placed!</p>
        </div>
      );
    }
  
    return (
      <div className="checkout">
        <h2>Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="price">${item.price}</div>
              </div>
              <button className="remove">🗑</button>
            </div>
          ))}
        </div>
        <div className="checkout-form">
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="text" placeholder="Street address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder="Postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="payment-method">
          <h3>Payment Method</h3>
          <div>
            <input type="radio" id="cod" name="paymentMethod" value="Cash on Delivery" checked readOnly />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>
        <div className="total">
          <h3>Subtotal: ${totalPrice}</h3>
          <h3>Delivery: $5</h3>
          <h3>Total: ${totalPrice + 5}</h3>
        </div>
        <button className="order-button" onClick={handleOrder}>Order Now ${totalPrice + 5}</button>
      </div>
    );
  };
  
  export default Checkout;