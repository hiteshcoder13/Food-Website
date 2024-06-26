import React from 'react';
import BestSeller from './BestSeller';

const Home = ({ handlePageChange }) => {
  return (
    <div className="home">
      <h1>Welcome to ST PIZZA</h1>
      <BestSeller handlePageChange={handlePageChange} />
    </div>
  );
};

export default Home;
