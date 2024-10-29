import styled from "styled-components";

type TitlePropsType = {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}


export const Title = styled.h2<TitlePropsType>`
    position: absolute;
    top: ${(props) => props.top || '0px'};
    left: ${(props) => props.left || '0px'};
    right: ${(props) => props.right || '0px'};
    bottom: ${(props) => props.bottom || '0px'};
    z-index: 3;
`

