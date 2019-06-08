import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket />
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
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    }); console.log('getById  ' + getById)
                    console.log('selectedPhoneyId  ' + this.state.selectedPhone)
                    console.log('getById  ' + phoneId)
                    console.log('phones  ' + this.state.phones)
                    
                  }}
                /> 
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: props.phone.images[0],
      description: props.phone.description,
      name: props.phone.name,
      images: props.phone.images,

    };

    this.hanbleShowImg = (imgURl) => {
      this.setState(()=> {
        return { mainImg: imgURl };
      });
    };
  }
  render () {
    return (
  <div>
    <img className="phone" src={this.state.mainImg}/>
    <button onClick={this.props.onBack}>Back</button>
    <button>Add to basket</button>

    <h1>{this.state.name}</h1>
    <p>{this.state.description}</p>

    <ul className="phone-thumbs">
      { this.state.images.map(imageUrl => (
        <li>
          <img 
          onClick = {()=> {this.hanbleShowImg(imageUrl)}} 
          src={imageUrl}/>
        </li>
      )) }
    </ul>
  </div>

    );
  }
  
};

export default App;
