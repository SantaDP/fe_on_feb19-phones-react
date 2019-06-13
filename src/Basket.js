import React from 'react';

const Basket = (props) => {
  return (
    <section>
      <p>Shopping Cart</p>
      <ul>
      {props.basketItems.map((phone, i) => (
        <li key={i}>{phone}<button onClick={()=> {props.handleRemoveFromBasket(i)}}>x</button></li>
        ))}
      </ul>
    </section>
  );
};

export default Basket;
