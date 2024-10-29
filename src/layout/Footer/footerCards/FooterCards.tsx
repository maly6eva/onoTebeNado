import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const FooterCards = () => {
    return (
        <StyledIcons>
            <Icon iconId={'youtube'} width={'48px'} height={'48px'} viewBox={'0 0 48 48'}/>
            <Icon iconId={'vk'} width={'48px'} height={'48px'} viewBox={'0 0 48 48'}/>
            <Icon iconId={'pinterest'} width={'48px'} height={'48px'} viewBox={'0 0 48 48'}/>
        </StyledIcons>
    );
};

const StyledIcons = styled.div`
    display: flex;
    gap: 50px;
`
