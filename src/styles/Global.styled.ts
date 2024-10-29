import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";
import {font} from "./Common";


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
                text-decoration: none;
                color: ${Theme.colors.fonts}
                cursor: pointer;
        }

        ul {
                color: ${Theme.colors.fonts};
                list-style-type: none;
        }

        button {
                background-color: unset;
                cursor: pointer;
                color: ${Theme.colors.accent};
                padding: 12px 32px;
                border: 1px solid #FFF;
        }

        section {
                padding: 180px 0 95px;
        }

        h1 {
                text-transform: uppercase;
                ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.accent})};
                font-size: 22px;
                position: absolute;
                bottom: 58px;
                left: 85px;
                word-spacing: 15px;
        }

        h2 {
                ${font({family: '"Raleway" sans-serif', weight: 700, Fmax: 50, Fmin: 18, color: Theme.colors.accent})};
                font-size: 100px;
                text-transform: uppercase;
                line-height: 100%;
                letter-spacing: 30px;
        }

        p {
                font-family: Raleway, sans-serif;
                font-size: 18px;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.18px;
        }
`
