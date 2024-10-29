import React from 'react';
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <FooterContact>
            <ContactTel href="tel:+99995555555">+9 999 555 5555</ContactTel><br/>
            <ContactEmail href="mailto:info@sobaka.ge">info@sobaka.ge</ContactEmail>
            <p>наб. Принсенграхт 263- 265, Амстердам</p>
        </FooterContact>
    );
};

const FooterContact = styled.address`
    max-width: 230px;
    width: 100%;
    font-style: normal;
    color: inherit;
    font-size: 18px;
    line-height: 24.3px;
    letter-spacing: 0.18px;

    p {
        line-height: 24.3px
    }
`
const ContactTel = styled.a`
    ${font({family: '"Raleway", sans-serif', weight: 400, Fmax: 18, Fmin: 16})}
    border-bottom: 2px solid  ${Theme.colors.fonts};
`
const ContactEmail = styled.a`
    ${font({family: '"Raleway", sans-serif', weight: 400, Fmax: 18, Fmin: 16})}
    border-bottom: 2px solid  ${Theme.colors.fonts};
`