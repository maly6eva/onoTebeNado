import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";



export const FooterMenu = () => {
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


const StyledHeaderMenu = styled.nav`
    display: flex;
    text-align: center;
`

const ListItem = styled.ul`
    display: flex;
    flex-direction: column;
    
    & li:nth-child(2) a {
        border-bottom: 2px solid  ${Theme.colors.fonts};
        ::before {
            position: relative;
            right: 12px;
        }
    }

    & li:nth-child(3) a {
        border-bottom: 2px solid  ${Theme.colors.fonts};
        ::before {
            position: relative;
            right: 12px;
        }
`

const LinkItem = styled.li`
    ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.fonts})};
    list-style-type: none;
    padding: 0 32px;
    font-size: 18px;
`

const Link = styled.a`
    gap: 32px;
    color: ${Theme.colors.fonts};
`