import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        //text-decoration: none;
        color: ${Theme.colors.fonts}
        cursor: pointer;
    }
    
    ul {
        //list-style: none;
        color: ${Theme.colors.fonts};
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.fonts};
    }
    
    section{
        padding: 180px;
    }
    
    h2{
        font-family: Raleway, sans-serif;
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    p{
        font-family: Raleway, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.18px;
    }
`
