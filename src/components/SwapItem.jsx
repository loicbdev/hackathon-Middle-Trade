import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Total = styled.div`
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const DIV = styled.div`

display: flex;
flex-direction: column;
text-align: left;
margin: 2rem;
padding: 1em;
width: auto;
height: auto;
font-family: Roboto, sans-serif;
background-color: rgba(203, 67, 53, 0.7);
border-radius: 10px;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
font-size: 0.75em;
color:white;

.category {
  color: black;
}

span,
h3,
h4 {
  font-size: 12px;
  margin: 0.5rem;
}

.swapPhoto {
  margin: auto;
  max-width: 15rem;
  height: auto;
}

.swapInformation {
  flex-wrap: wrap;
  margin: auto;
}

.addToCart {
  display: flex;
  justify-content: center;
}

input {
  font-size: 1rem;
}

.form-input {
  width: 2.5rem;
  height: 2rem;
  background-size : 1rem;
}

button {
  width: 50px;
  text-align: center;
  margin: 1rem;
  border-radius: 15px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  transition: ease-in-out 0.2s;
  :active{
    box-shadow:none;
    color:rgb(203, 57, 53);
      background-color:white;
      border:1px;
      border-color:rgb(203, 57, 53)
  }
}

.swapDetail {
  width: 10rem;
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
}


@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  max-width: 50rem;
  height: auto;
  background-color: rgba(203, 67, 53, 0.4);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;
  color:white;

  .swapPhoto {
    width: 9rem;
    height: auto;
  }
  .swapInformation {
    width: 10rem;
    height: auto;
    margin: 1rem;
  }
  button {
    width: auto;
    text-align: center;
    margin: 1rem;
    border-radius: 15px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  transition: ease-in-out 0.2s;
  :active{
    box-shadow:none;
    
  }

  .swapDetail {
    width: 2rem;
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
`;

class SwapItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: true,
      totalItem: 0,
      totalItemValue: 0,
    };
  }

  addToCart() {
    this.setState({
      isAdded: !this.state.isAdded,
    });
  }

  render() {
    const {
      name,
      image,
      category,
      location,
      quantity,
      value,
      id,
      increment,
      decrement,
      addItem,
      removeItem,
      changeItemQty,
    } = this.props;
    const { totalItem } = this.state;
    return (
      <div>
        <DIV>
          <img className="swapPhoto" src={image} alt={name} />
          <div className="swapInformation">
            <div className="sawpCategory">
              <h3 className="category-title">
                {" "}
                Category : {category !== undefined ? category : "Divers"}
              </h3>
              <h3 className="name">{name}</h3>
            </div>
            <div className="swapLocation">
              <h4 className="quantity">Quantity : {quantity}</h4>
            </div>
            <div className="swapLocation">
              <h4 className="location">$wappy : {value}</h4>
            </div>
            <div className="swapLocation">
              <h4 className="location">Where : {location}</h4>
            </div>
          </div>
          <div className="addToCart">
            <button
              onClick={() => {
                if (totalItem < quantity) {
                  this.setState({ 
                    totalItem: totalItem + 1,
                    totalItemValue: (totalItem + 1) * value  });
                  increment();
                  if(totalItem===0){
                    addItem({
                      id:id,
                      quantity: totalItem + 1,
                      value: value,
                    })
                  } else {
                    changeItemQty(id,totalItem +1)
                  }
                }
              }}
            >
              {" "}
              +{" "}
            </button>
            <Total>
              <p>{totalItem}</p>
            </Total>
            <button
              onClick={() => {
                if (totalItem > 0) {
                  this.setState({ totalItem: totalItem - 1 });
                  decrement();
                  if(totalItem!==0){
                    removeItem({
                      id:id,
                      quantity: totalItem - 1,
                      value: value,
                    })
                  } else {
                    changeItemQty(id,totalItem - 1)
                  }
                }
              }}
            >
              {" "}
              -{" "}
            </button>
            <button
              onClick={(e) => {
                this.addToCart();
              }}
            >
              {this.state.isAdded ? "Swap" : "Remove"}
            </button>
          </div>
        </DIV>
      </div>
    );
  }
}

SwapItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default SwapItem;
