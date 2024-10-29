import styled from "styled-components";
import {font} from "../styles/Common";
import {Theme} from "../styles/Theme";


export const SectionTitle = styled.h3`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, color: Theme.colors.fonts})}
    font-size: 40px;
    text-transform: uppercase;
`
