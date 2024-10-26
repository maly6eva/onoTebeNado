import React from 'react';
import sprite from '../../assets/images/sprite.svg'


type IconPropsType = {
    iconId?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width="148" height="105" viewBox="0 0 148 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    )
}