import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Contact} from "./Contact/Contact";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {FooterCards} from "./footerCards/FooterCards";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between">
                    <Contact/>
                    <FooterMenu/>
                    <FooterCards/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.div`
padding-bottom: 90px;
`
