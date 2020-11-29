import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Knight from "./pictos/Knight.svg";
import Pannier from "./pictos/panier.png";

const FooterWrap = styled.div`
  height: 3rem;
  background-color: rgb(203, 57, 53);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .BasketSliderOpen {
    height: 150px;
    width: 150px;
    background-color: black;
    position: fixed;
    right: 0;
    transition: ease-in-out 0.3s;
    transform: translateY(-8.5rem) translateX(-2rem);
    color: white;
  }
  .BasketSliderClose {
    height: 150px;
    width: 150px;
    background-color: black;
    position: fixed;
    right: 0;
    transition: ease-in-out 0.3s;
    transform: translateY(-8.5rem) translateX(15rem);
    color: white;
  }
  .totalListShow {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: black;
    position: fixed;
    right: 0;
    transform: translateY(-1.3rem) translateX(-1.7rem);
    display: flex;
    justify-content: center;
  }
  .pShow {
    color: white;
    position: fixed;
    right: 0;
    font-size: 0.8rem;
    transform: translateY(-0.65rem) translateX(-0.4rem);
  }
  .totalListHide {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: black;
    position: fixed;
    right: 0;
    transform: translateY(-1.3rem) translateX(-1.7rem);
    display: none;
    justify-content: center;
  }
  .pHide {
    color: white;
    position: fixed;
    right: 0;
    font-size: 0.8rem;
    transform: translateY(-0.65rem) translateX(-0.4rem);
    display: none;
  }
  .tradeButton{
      background-color:rgb(203, 57, 53);
      outline:none;
      border:none;
      border-radius:15px;
      color:white;
      box-shadow: 2px 2px 2px rgba(191, 196, 196, 0.4);
      transition: ease-in-out 0.3s;
      :active{
        box-shadow:none;
      }
  }
`;

const FooterAccount = styled.div`
  margin-left: 2rem;
  background-color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  img {
    height: 40px;
    object-fit: fit-content;
  }
`;

const BasketWrap = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px rgba(81, 90, 90, 0.4);
  img {
    height: 30px;
    object-fit: fit-content;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.isHidden = this.isHidden.bind(this);
  }

  isHidden() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  reset() {
    alert("order completed")
  }
  
  render() {
    const { totalList, totalListValue, cartItems,} = this.props;
    const { hidden } = this.state;
    
    return (
      <FooterWrap>
        <Link to="/Account">
          <FooterAccount>
            <img src={Knight} alt="profile logo" />
          </FooterAccount>
        </Link>
        <div className={totalList !== 0 ? "totalListShow" : "totalListhide"}>
          <p className={totalList !== 0 ? "pShow" : "pHide"}>{totalList}</p>
        </div>
        <BasketWrap hidden={hidden} onClick={this.isHidden}>
          <img src={Pannier} alt="pannier" />
        </BasketWrap>
        <div
          className={
            this.state.hidden ? "BasketSliderOpen" : "BasketSliderClose"
          }
        >
          <p>Total:</p>
          <p>
            {cartItems.reduce((acc, el) => {
              return acc + el.value * el.quantity;
            }, 0)} $wappy
          </p>
          <button className='tradeButton' onCLick={this.reset}>Trade!</button>
        </div>
      </FooterWrap>
    );
  }
}

export default Footer;
