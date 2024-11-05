import React from 'react';
import styled from "styled-components";
import marker from '../../../assets/images/marker.svg'
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";



export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ListItem role={'menu'}>
                <LinkItem role={'menuitem'}>
                    <Link href="">главная</Link>
                </LinkItem>
                <LinkItem role={'menuitem'}>
                    <Link href="">посмотреть лоты</Link>
                </LinkItem>
                <LinkItem role={'menuitem'}>
                    <Link href="">об аукционе</Link>
                </LinkItem>
            </ListItem>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
    
`

const ListItem = styled.ul`
    display: flex;
    flex-direction: row;
    
    & li:nth-child(2) a {
        border-bottom: 2px solid  ${Theme.colors.fonts};
    }
        ::before {
            position: relative;
            content: url(${marker});;
            right: -119px;
        }
    }

    & li:nth-child(3) a {
        border-bottom: 2px solid  ${Theme.colors.fonts};
        ::before {
            position: relative;
            content: url(${marker});;
            right: 12px;
        }
`

const LinkItem = styled.li`
    padding-left: 32px;
    font-size: 18px;
    ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.fonts})};
`
const Link = styled.a`
    gap: 32px;
    color: ${Theme.colors.fonts};
`