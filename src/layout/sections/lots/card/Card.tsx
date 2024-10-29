import React from 'react';
import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {Theme} from "../../../../styles/Theme";


type CardPropsType = {
    src: string,
    title: string,
    text: string,

}

export const Card = (props: CardPropsType) => {
    return (
        <CardWrapper>
            <CardImg src={props.src} width={'335'} height={'565'} alt="background card"/>
            <CardTitle>{props.title}</CardTitle>
            <CardContent>{props.text}</CardContent>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 330px;
`

const CardImg = styled.img`
    background-size: cover;
    filter: brightness(50%);
`
const CardTitle = styled.h4`
    position: absolute;
    width: 260px;
    top: 50px;
    left: 40px;
    display: flex;
    text-align: start;
    text-transform: uppercase;
    ${font({family: '"Raleway" sans-serif', weight: 700, color: Theme.colors.accent})};
    font-size: 22px;
    text-decoration-line: underline;
`
const CardContent = styled.p`
    ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.accent})};
    width: 260px;
    position: absolute;
    bottom: 50px;
    left: 40px;
    display: flex;
    align-self: flex-end;
    font-size: 20px;
    line-height: 120%;
`
