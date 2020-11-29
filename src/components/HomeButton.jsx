import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Char from './pictos/charette.png';
import View from './pictos/view.png'

const StyledLink = styled(Link)`
&:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const HomeButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 12rem;
`;

const SearchButton = styled.button`
  height: 20vh;
  width: 90vw;
  background-color: rgb(203, 57, 53);
  box-shadow: 4px 4px 4px rgba(81, 90, 90, 0.4);
  color: white;
  outline: none;
  margin-top: 1rem;
  border: none;
  transition: ease-in-out 0.2s;
  display: flex;
  align-items: center;
  :active {
    box-shadow: none;
  }
  img {
      height: 40px;
      margin: 0 3rem 0 2rem;
  }
  p{
      font-size: 1.5rem;
      text-decoration: none;
  }
`;

const DepositButton = styled.div`
  height: 20vh;
  width: 90vw;
  background-color: rgb(203, 57, 53);
  box-shadow: 4px 4px 4px rgba(81, 90, 90, 0.4);
  color: white;
  outline: none;
  border: none;
  transition: ease-in-out 0.2s;
  display:flex;
  align-items: center;
  :active {
    box-shadow: none;
  }
  img {
      height: 80px;
      margin: 0 3rem 0 2rem;
  }
  p{
      font-size: 1.5rem;
  }
`;

class HomeButton extends Component {
  render() {
    return (
      <HomeButtonWrap>
        <StyledLink to='/Deposit'>
            <DepositButton>
                <img src={Char} alt='Charette' />
                <p>Deposit</p>
            </DepositButton>
        </StyledLink>
        <StyledLink to='/SwapList'>
            <SearchButton>
                <img src={View} alt='Charette' />
                <p>Search ?</p>
            </SearchButton>
        </StyledLink>
      </HomeButtonWrap>
    );
  }
}

export default HomeButton;
