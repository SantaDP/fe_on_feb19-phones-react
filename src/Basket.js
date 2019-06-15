import React from 'react';

const Basket = (props) => {  
  return (
    <section>
      <p>Shopping Cart</p>
      <ul>
      {Object.keys(props.basketItems).map((phone) => (
        <li key={phone}>{phone} {(props.basketItems[phone] > 1) ? '(' + props.basketItems[phone] + ')' : null}<button onClick={()=> {
          props.handleRemoveFromBasket(phone);
          }}>x</button></li>
      
        ))}
      </ul>
    </section>
  );
};

export default Basket;
