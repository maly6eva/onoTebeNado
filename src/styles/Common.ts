import {Theme} from "./Theme";


type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number

}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
font-family: ${family || 'Raleway'};
font-weight: ${weight || 400};
color: ${color || Theme.colors.fonts};
line-height: ${lineHeight || 1.2};
font-size: calc((100vw - 375px) / (1100 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);


`