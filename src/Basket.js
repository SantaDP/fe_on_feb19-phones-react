import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Basket = (props) => {
  return (
    <section>
      <p>Shopping Cart</p>
      <ul>
      {props.basketItems.map((phone, i) => (
        <li>{phone}<button onClick={()=> {props.handleRemovePhone(i)}}>x</button></li>
        ))}
      </ul>
    </section>
  );
};

export default Basket;
