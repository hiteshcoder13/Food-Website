import React from 'react';
import './BestSellers.css';

const BestSellers = ({ onShowMenu}) => {
  const bestSellers = [
    {
        name: 'Pepperoni Pizza',
        description: 'Pepperoni puts the pizzazz in pizza. Enjoy every bite of our traditional crust brushed with garlic butter, topped...',
        price: '12',
        img:"https://media.istockphoto.com/photos/pizza-pepperoni-isolated-on-white-background-picture-id1042948900?k=6&m=1042948900&s=170667a&w=0&h=qmTIE03bmDtIBZla4H_1XlVBja33C-9cuWr7s4ayW-I=" // replace with the actual path to your image
      },
      {
        name: 'Cheese Pizza',
        description: 'Cheese pizza is a favorite for a reason. Gooey mozzarella cheese is the star of our cheese pizza on a traditional crus...',
        price: '11',
        img: "https://img.freepik.com/premium-photo/delicious-cheese-pizza-white-background_980220-745.jpg?w=2000" // replace with the actual path to your image
      },
      {
        name: 'Beef Pizza',
        description: 'Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with...',
        price: '14',
        img: "https://img.freepik.com/premium-photo/pizza-with-roast-beef-artichokes-jalapenos-chili-mozzarella-pesto-neapolitan-round-pizza-white-background_690179-314.jpg?w=2000" // replace with the actual path to your image
      }
  ];

  return (
    <section className="best-sellers">
      <h2>Check Out Our Best Sellers</h2>
      <div className="best-sellers-grid">
        {bestSellers.map((item, index) => (
          <div key={index} className="best-seller-item">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="price">${item.price}</div>
            <a href='/' onClick={onShowMenu}>Add to Cart</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
