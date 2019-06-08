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
      basketItems: [],
    };
    this.handleAddPhoneInBascket = (PhoneName) => {
      this.setState((prev)=> {
        return { basketItems: [...prev.basketItems, PhoneName]}
      })
    }
    this.handleRemovePhone = (phone) => {
      let arrWithPhones  =[this.state.basketItems.splice(phone, 1)];
      this.setState((prev) => {
        return { basketItems: prev.basketItems}
        
      }) 
    }
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
              handleRemovePhone = {this.handleRemovePhone}
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
                  handleAddPhoneInBascket={this.handleAddPhoneInBascket}

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
                  handleAddPhoneInBascket={this.handleAddPhoneInBascket}
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
