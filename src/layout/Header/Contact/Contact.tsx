import React from 'react';
import styled from "styled-components";

export const Contact = () => {
    return (
        <HeaderContact>
            <p>+9 999 555 5555</p>
            <p>info@sobaka.ge</p>
            <p>наб. Принсенграхт 263- 265, Амстердам</p>
        </HeaderContact>
    );
};

const HeaderContact = styled.div`
    max-width: 240px;
    width: 100%;
    
`
