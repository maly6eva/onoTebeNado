import React from 'react';
import styled from "styled-components";
import backgroundImg from '../../../assets/images/lotus-flower.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Title} from "./title/Title";


export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper justify="center" align="center">
                    <Title top={'165px'} left={'50px'}>он</Title>
                    <Title top={'165px'} left={'280px'}>о</Title>
                    <Title top={'300px'} left={'330px'}>т</Title>
                    <Title top={'300px'} left={'450px'}>ебе</Title>
                    <Title top={'440px'} left={'630px'}>н</Title>
                    <Title top={'440px'} left={'760px'}>адо</Title>
                    <Auction>Аукцион вещей, в которые никто не верил</Auction>
                    <Button type={'submit'}>Сделать ставку</Button>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 1100px;
    position: relative;
`
const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    max-height: 760px;
    margin: 0 auto;
    padding: 0 15px;
    
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    border: 1px solid red;
    position: relative;
    
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный для затемнения */
        z-index: 1;
    }
`
const Auction = styled.h1`
    z-index: 3;
`
const Button = styled.button`
    position: absolute;
    right: 50px;
    bottom: 50px;
    color: ${Theme.colors.accent};
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    z-index: 3;
`

