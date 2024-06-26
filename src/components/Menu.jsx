import React from 'react';
import './Menu.css';

const Menu = ({ onAddToCart }) => {
  const menuCategories = [
    {
      category: 'Pizzas',
      items: [
        { name: "Pepperoni Pizza", description: "Pepperoni puts the pizzazz in pizza.", price: "12", img: "https://media.istockphoto.com/photos/pizza-pepperoni-isolated-on-white-background-picture-id1042948900?k=6&m=1042948900&s=170667a&w=0&h=qmTIE03bmDtIBZla4H_1XlVBja33C-9cuWr7s4ayW-I=" },
        { name: "Cheese Pizza", description: "Cheese pizza is a favorite for a reason.", price: "11", img: "https://img.freepik.com/premium-photo/delicious-cheese-pizza-white-background_980220-745.jpg?w=2000" },
        { name: "Beef Pizza", description: "Beef pizza is made for the meat lovers.", price: "14", img: "https://img.freepik.com/premium-photo/pizza-with-roast-beef-artichokes-jalapenos-chili-mozzarella-pesto-neapolitan-round-pizza-white-background_690179-314.jpg?w=2000" }
      ]
    },
    {
      category: 'Pasta',
      items: [
        { name: "Spaghetti Carbonara", description: "Creamy carbonara with crispy pancetta.", price: "$15", img: "https://img.freepik.com/premium-photo/spaghetti-carbonara-isolated-plain-white-background_146508-7033.jpg" },
    { name: "Penne Arrabiata", description: "Spicy and delicious penne arrabiata.", price: "13", img: "https://i.pinimg.com/originals/93/58/a4/9358a4185c86c21c21a31f1a1038e28c.jpg" },
    { name: "Lasagna", description: "Layered lasagna with beef and cheese.", price: "16", img: "https://thumbs.dreamstime.com/b/lasagna-isolated-white-background-lasagna-white-background-124868929.jpg" }
      ]
    },
    {
      category: 'Salads',
      items: [
        { name: "Caesar Salad", description: "Crispy romaine lettuce with Caesar dressing.", price: "10", img: "https://thumbs.dreamstime.com/b/caesar-salad-paper-bowl-take-away-isolated-white-background-top-view-caesar-salad-take-away-bowl-white-background-126086176.jpg" },
        { name: "Greek Salad", description: "Fresh and healthy Greek salad.", price: "11", img: "https://th.bing.com/th/id/OIP.hDJ23i_ScOWYRNneFNpftgHaE8?rs=1&pid=ImgDetMain" },
        { name: "Caprese Salad", description: "Tomato and mozzarella with basil.", price: "12", img: "https://th.bing.com/th/id/OIP.xz0sYvFc3LwCMMcRWgjkHQAAAA?rs=1&pid=ImgDetMain" }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone.", price: "8", img: "https://th.bing.com/th/id/OIP.MqOjvqL4tiVwoLNMjUqywAHaGL?rs=1&pid=ImgDetMain" },
        { name: "Gelato", description: "Creamy Italian ice cream.", price: "7", img: "https://th.bing.com/th/id/OIP.Zijut9-og1rF7BY_HNmsMgHaHa?rs=1&pid=ImgDetMain" },
        { name: "Panna Cotta", description: "Delicious vanilla panna cotta.", price: "9", img: "https://c8.alamy.com/comp/DN976A/panna-cotta-dessert-on-plate-isolated-on-white-background-DN976A.jpg" }
      ]
    },
    // More categories
  ];

  return (
    <section className="menu">
      <h2>Our Menu</h2>
      {menuCategories.map((category, index) => (
        <div key={index} className="menu-category">
          <h3>{category.category}</h3>
          <div className="menu-grid">
            {category.items.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="price">${item.price}</div>
                <button onClick={() => onAddToCart(item)}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
