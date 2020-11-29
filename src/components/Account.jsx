import { Component } from "react";
import styled from "styled-components";
import knight from "./pictos/Knight.svg"

const Main = styled.div`
  background-color: rgb(203, 57, 53);
  margin: 8rem 1rem 5rem 1rem;
  min-height: 100%;
  align-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: top;
        margin: 2rem 0 2rem 0;
        background-color: #ffffff;
    }
    label {
        width: 80%;
        margin: 1rem;
        input {
            font-size: 20px;
            padding: 0 0 0 10px;
            height: 2rem;
        }
        input:disabled {
            font-size: 20px;
            padding: 0 0 0 10px;
            background-color: #CB4335;
            border-style: solid;
            border-color: #ffffff;
            border-width: 0.5px;
            color: #ffffff;
        }
    }
    fieldset {
        width: 80%;
        margin: 1rem;
        color: #ffffff;
        border: 1px solid;
    }
    button {
        width: 150px;
        height: 50px;
        font-size: 15px;
        margin: 1rem;
        background-color: #000000;
        color: #ffffff;
        border: 1px solid;
        border-color: #000000;
    }
  }
`;

class Account extends Component {
  constructor(props) {
    super(props);
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    this.state = {
      formEnabled: false,
      firstName: firstName ? firstName : "firstName",
      lastName: lastName ? lastName : "lastName",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  handleClick(event) {
    const { firstName, lastName } = this.state;
    event.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    this.setState({
      formEnabled: !this.state.formEnabled,
    });
  }

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    const { formEnabled, firstName, lastName } = this.state;
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    });
    return (
      <Main className="Account">
        <form onSubmit={this.handleClick}>
          <img src={knight} alt="account avatar" />
          <label htmlFor="firstName">
            <input
              disabled={!formEnabled}
              value={firstName}
              type="text"
              onChange={this.handleChangeFirstName}
              id="firstName"
              name="firstName"
            />
          </label>
          <label htmlFor="lastName">
            <input
              disabled={!formEnabled}
              value={lastName}
              type="text"
              onChange={this.handleChangeLastName}
              id="lastName"
              name="lastName"
            />
          </label>
          <fieldset>
            <legend>GPS location</legend>
            <div>lat. : {localStorage.getItem("latitude")}</div>
            <div>long. : {localStorage.getItem("longitude")}</div>
          </fieldset>
          <button type="button" onClick={this.handleClick}>
            {formEnabled ? "Save" : "Modify"}
          </button>
        </form>
      </Main>
    );
  }
}

export default Account;
