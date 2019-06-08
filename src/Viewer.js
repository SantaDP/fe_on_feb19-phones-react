import React from 'react';
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
    <button onClick={()=> {this.props.handleAddPhoneInBascket(this.state.name)}}>Add to basket</button>

    <h1>{this.state.name}</h1>
    <p>{this.state.description}</p>

    <ul className="phone-thumbs">
      { this.state.images.map(imageUrl => (
        <li>
          <img key={this.props.selectedPhone.id}
          
          onClick = {()=> {this.hanbleShowImg(imageUrl)}} 
          src={imageUrl}/>
        </li>
      )) }
    </ul>
  </div>

    );
  }
  
};

export default Viewer;