import React from "react";
import SwapItem from "./SwapItem";
import styled from "styled-components";

const SWAPLIST = styled.div`
  padding-top: 7.5rem;
  padding-bottom: 5rem;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
    display: flex;
    list-style: none;
    justify-content: center;
  }

  .category {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .buttonList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    outline-style: none;
    border-radius: 10px;
    margin: 0.5rem;
    width: 4rem;
    outline: none;
    border: none;
    background-color: rgb(203, 57, 53);
    color: white;
    :focus {
      color: rgb(203, 57, 53);
      background-color: white;
      border: 1px;
      border: solid;
      border-color: rgb(203, 57, 53);
    }
  }
`;

class SwapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaps: [],
      status: "all",
    };
    this.food = this.food.bind(this);
    this.clothes = this.clothes.bind(this);
    this.tools = this.tools.bind(this);
    this.livestock = this.livestock.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  componentDidMount() {
    this.fetchSwaps();
  }

  fetchSwaps() {
    this.setState({
      swaps: JSON.parse(localStorage.getItem("stuff")),
    });
  }

  food() {
    this.setState({
      status: "food",
    });
  }

  clothes() {
    this.setState({
      status: "clothes",
    });
  }

  tools() {
    this.setState({
      status: "tools",
    });
  }

  livestock() {
    this.setState({
      status: "livestock",
    });
  }

  showAll() {
    this.setState({
      status: "all",
    });
  }

  render() {
    const { swaps, status } = this.state;
    const { addItem, removeItem, changeItemQty } = this.props;
    return (
      <SWAPLIST className="SwapList">
        <div className="category">
          <button className="buttonList" type="button" onClick={this.food}>
            Food
          </button>
          <button className="buttonList" type="button" onClick={this.clothes}>
            Clothes
          </button>
          <button className="buttonList" type="button" onClick={this.tools}>
            Tools
          </button>
          <button className="buttonList" type="button" onClick={this.livestock}>
            Livestock
          </button>
          <button className="buttonList" type="button" onClick={this.showAll}>
            All
          </button>
        </div>
        <ul>
          {swaps
            .filter((event) => {
              console.log(status);
              if (status === "all") {
                return true;
              }
              if (status === "food") {
                return event.category === "food";
              }
              if (status === "clothes") {
                return event.category === "clothes";
              }
              if (status === "tools") {
                return event.category === "tools";
              }
              if (status === "livestock") {
                return event.category === "livestock";
              }
              return event.category === "";
            })
            .map((event) => {
              return (
                <li key={event.id}>
                  <SwapItem
                    {...event}
                    totalList={this.state.totalList}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    addItem={addItem}
                    removeItem={removeItem}
                    changeItemQty={changeItemQty}
                  />
                </li>
              );
            })}
        </ul>
      </SWAPLIST>
    );
  }
}

export default SwapList;
