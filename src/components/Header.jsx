import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Title from './pictos/titre.png';

const StyledLink = styled(Link)`
&:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const HeaderWrap = styled.div`
height: 6rem;
background-color: rgb(203, 57, 53);
position: fixed;
top: 0;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
display:flex;
justify-content: center;
border-radius: 0 0 30% 30%;
img{
 width:300px;   
}
`;

class Header extends Component {
    render() {
        return (
            <StyledLink to='/'><HeaderWrap>
                <img src={Title} alt='middle trade' />
            </HeaderWrap></StyledLink>
        )
}
}

export default Header;