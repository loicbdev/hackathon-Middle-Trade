import React from 'react';

import HomeButton from './HomeButton';
import styled from 'styled-components';


const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`;

const HomePage = () => {
    return (
        <HomeWrapper>
            <HomeButton />
        </HomeWrapper>
    )
    }

export default HomePage;