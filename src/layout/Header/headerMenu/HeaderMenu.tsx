import React from 'react';
import styled from "styled-components";
import marker from '../../../assets/images/marker.svg'
import {Theme} from "../../../styles/Theme";


const svgIcon = encodeURIComponent(`
<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="3.5" r="3" stroke="black"/>
</svg>

`);

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ListItem>
                <LinkItem>
                    <Link href="">главная</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="">посмотреть лоты</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="">об аукционе</Link>
                </LinkItem>
            </ListItem>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.div`
   
`

const ListItem = styled.ul`
    display: flex;
    flex-direction: row;
    
    //&::marker {
    //    list-style-position: inside;
    //}
    &:hover {
        ul{
            list-style: none;
        }
    }
`

const LinkItem = styled.li`
    padding: 0 32px;
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    list-style: circle;
    
    &:hover {
        list-style: none;
    }
    
    
    //&::marker {
    //    font-size: 1.5em;
    //    line-height: 0.9;
    //   
    //}
   
    &::before{
        content: '';
        display: inline-block;
        //width: 20px;
        //height: 20px;
        mask: url(${marker});
    }
    
    &:hover {
     a{
         text-decoration: none;
     }
    }
`

const Link = styled.a`
    gap: 32px;
    color: ${Theme.colors.fonts};
`