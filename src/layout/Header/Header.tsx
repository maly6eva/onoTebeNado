import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/Logo/Logo";
import {Contact} from "./Contact/Contact";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center" gap='185'>
                    <FlexWrapper justify="space-between" align="center" gap='36px'>
                        <HeaderMenu/>
                        <Logo/>
                    </FlexWrapper>
                    <Contact/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    margin-top: 100px;
`
