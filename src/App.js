import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'
import Viewer from './Viewer'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: {
       
      },
    };
    
  }

  handleRemoveFromBasket = (phoneName) => {
    this.setState((prev) => {
      const copyBasketItems = {...prev.basketItems};
      const count = copyBasketItems[phoneName] || 0;
      count > 1 ? copyBasketItems[phoneName] = count -1: delete copyBasketItems[phoneName]

      return { basketItems: copyBasketItems}
    }) 
  }

  handleAddToBasket = (phoneName) => { 
    this.setState((prev)=> {
      const quantity = prev.basketItems[phoneName] || 0;
      const copyBasketItems = {...prev.basketItems};
      copyBasketItems[phoneName] = quantity + 1;
      return { basketItems: copyBasketItems}
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket 
              basketItems = {this.state.basketItems}
              handleRemoveFromBasket = {this.handleRemoveFromBasket}
              />
            </div>
            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  selectedPhone = {this.state.selectedPhone}
                  basketItems={this.state.basketItems}
                  handleAddToBasket={this.handleAddToBasket}

                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
                    
                  }}
                  basketItems={this.state.basketItems}
                  handleAddToBasket={this.handleAddToBasket}
                /> 
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
