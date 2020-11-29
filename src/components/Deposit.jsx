import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  depo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 7.5rem;
    padding-bottom: 5rem;
    line-height: 2;
  }
  .Deposit{
    font-size:2rem;
  }
  .yourProduct {
    padding: 10px;
  }

  .productdepo {
    display: flex;
    justify-content: column;
    align-items: center;
  }

  select {
    width: 100%;
    text-align: center;
    align-self: center;
    margin: 0;
  }
  input {
    display: flex;
    height: 30%;
    width: 100%;
    border: 2px solid #cb4435;
  }
  .yourProduct {
    width: auto;
    height: 20vh;
  }
  .url {
    width: 10rem;
  }
  .myButton {
    box-shadow: inset 0px 1px 0px -37px #cf866c;
    background-color: #cb4435;
    border-radius: 3px;
    border: 1px solid #942911;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    margin-top: 20px;
  }
  .myButton:hover {
    background-color: #bc3315;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
`;

const values = [
  {object: "", value:""},
  {object: "RED WINE", value: "3"},
  {object: "QUAIL EGGS", value: "1"},
  {object: "BOAR", value: "10"},
  {object: "RABBITS", value: "5"},
  {object: "ARMOUR", value: "30"},
  {object: "SICKLE", value: "7"},
  {object: "GRINDING WHEEL", value: "12"},
  {object: "HORSES", value: "50"},
  {object: "DRESS", value: "5"},
  {object: "PAIR OF SANDALS", value: "4"},
  {object: "CAP", value: "2"},
  {object: "POTATOES", value: "2"},
  {object: "PORK", value: "16"}
]

function Deposit() {
  const [stuff] = React.useState(
    JSON.parse(localStorage.getItem("stuff"))
  );
  const [form, setForm] = React.useState({
    category: "",
    name: "",
    location: "",
    quantity: "",
    image: null,
    value: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    form.value = values.find(e => e.object === form.name).value;
    form.id = JSON.stringify(stuff.length + 1);
    stuff.push(form);
    localStorage.setItem("stuff", JSON.stringify(stuff));
    alert("Ad sent!")
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <DIV>
      <div className="deposit">
        <depo onSubmit={(e) => handleSubmit(e)}>
          <label className='Deposit' htmlFor="your-deposit">Your Deposit</label>
          <img
            className="yourProduct"
            src={form.image}
            alt=""
          />
          <label htmlFor="location">Your image
          <input
          className="url"
          type="url"
          name="image"
          onChange={(e) => handleChange(e)}
          /></label>
          <label htmlFor="category" className="productCategory">
            Category
            <select
              onChange={(e) => handleChange(e)}
              name="category"
              id="category"
            >
              <option value="">Select your category</option>
              <option value="food">Food</option>
              <option value="clothes">Clothes</option>
              <option value="tools">Tools</option>
              <option value="livestock">Livestock</option>
            </select>
          </label>
          <label htmlFor="name">
            Product
            <select
              onChange={(e) => handleChange(e)}
              disabled={form.category === "" ? "disabled" : ""}
              className="productdepo"
              name="name"
              id="name"
            >
              <option value="">Select your product</option>
              <option
                disabled={form.category !== "food" ? "disabled" : ""}
                value="RED WINE"
              >
                RED WINE
              </option>
              <option
                disabled={form.category !== "food" ? "disabled" : ""}
                value="QUAIL EGGS"
              >
                QUAIL EGGS
              </option>
              <option
                disabled={form.category !== "livestock" ? "disabled" : ""}
                value="BOAR"
              >
                BOAR
              </option>
              <option
                disabled={form.category !== "clothes" ? "disabled" : ""}
                value="ARMOUR"
              >
                ARMOUR
              </option>
              <option
                disabled={form.category !== "tools" ? "disabled" : ""}
                value="SICKLE"
              >
                SICKLE
              </option>
              <option
                disabled={form.category !== "tools" ? "disabled" : ""}
                value="GRINDING WHEEL"
              >
                GRINDING WHEEL
              </option>
              <option
                disabled={form.category !== "livestock" ? "disabled" : ""}
                value="HORSES"
              >
                HORSES
              </option>
              <option
                disabled={form.category !== "clothes" ? "disabled" : ""}
                value="DRESS"
              >
                DRESS
              </option>
              <option
                disabled={form.category !== "clothes" ? "disabled" : ""}
                value="PAIR OF SANDALS"
              >
                PAIR OF SANDALS
              </option>
              <option
                disabled={form.category !== "clothes" ? "disabled" : ""}
                value="CAP"
              >
                CAP
              </option>
              <option
                disabled={form.category !== "food" ? "disabled" : ""}
                className="Food"
                value="POTATOES"
              >
                POTATOES
              </option>
              <option
                disabled={form.category !== "livestock" ? "disabled" : ""}
                value="PORK"
              >
                PORK
              </option>
            </select>
          </label>
          <label htmlFor="location">Location
            <input
              type="text"
              name="location"
              onChange={(e) => handleChange(e)}
            /></label>
          <div className="productdepo">
            <label htmlFor="quantity">Quantity
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="300"
              onChange={(e) => handleChange(e)}
            /></label>
          </div>
          <button className="myButton" onClick={handleSubmit}>
              Swap
            </button>
        </depo>
      </div>
    </DIV>

  );
}
export default Deposit;
