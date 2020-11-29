import React from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SwapList from "./components/SwapList";
import Deposit from "./components/Deposit";
import Account from "./components/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalList: 0,
      totalListValue: 0,
      cartItems: [],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItemQty = this.changeItemQty.bind(this);
  
  }

  componentDidMount() {
    localStorage.clear()
    this.getApi();
  }

  getApi() {
    axios
      .get(
        "https://raw.githubusercontent.com/Francois2344/hackathon1/main/swap/db.json"
      )
      .then((response) => {
        localStorage.setItem("stuff", JSON.stringify(response.data));
      });
  }

  addItem(item) {
    this.setState({
      cartItems: [...this.state.cartItems, item],
    });
  }

  changeItemQty(itemId, qty) {
    this.setState({
      cartItems: [
        ...this.state.cartItems.map((el) => {
          if (el.id === itemId) {
            el.quantity = qty;
          }
          return el;
        }),
      ],
    });
  }

  removeItem(item) {
    this.setState({
      cartItems: [...this.state.cartItems.filter((el) => el.id !== item.id)],
    });
  }

  increment() {
    this.setState({
      totalList: this.state.totalList + 1,
      totalListValue: (this.state.totalList + 1) * this.props.value,
    });
  }

  decrement() {
    this.setState({
      totalList: this.state.totalList - 1,
    });
  }

  

  render() {
    console.log(this.state.cartItems);
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/SwapList">
              <SwapList
                totalList={this.state.totalList}
                increment={this.increment}
                decrement={this.decrement}
                addItem={this.addItem}
                removeItem={this.removeItem}
                changeItemQty={this.changeItemQty}
                
              />
              <ScrollUpButton
                style={{
                  backgroundColor: "none",
                  width: "40px",
                  height: "40px",
                  outline: "none",
                  transform: "translateY(-3rem) translateX(1.5rem)",
                }}
              />
            </Route>
            <Route path="/Deposit">
              <Deposit />
            </Route>
            <Route path="/Account">
              <Account />
            </Route>
          </Switch>
          <Footer
            totalList={this.state.totalList}
            totalListValue={this.state.totalListValue}
            increment={this.increment}
            decrement={this.decrement}
            cartItems={this.state.cartItems}
            reset={this.reset}
          />
        </div>
      </Router>
    );
  }
}

export default App;
