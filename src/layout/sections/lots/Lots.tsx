import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Card} from "./card/Card";
import card_1 from '../../../assets/images/card_1.webp'
import card_2 from '../../../assets/images/card_2.webp'
import card_3 from '../../../assets/images/card_3.webp'
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Lots = () => {
    return (
        <StyledLots>
            <Container>
                    <SectionTitle>Лоты</SectionTitle>
                    <FlexWrapper gap={'25px'}>
                        <Card src={card_1} title={'Фильм режиссёра, который бросил киношколу'} text={'Не просто бросил, а ушёл с первой лекции. Какой была бы ваша ставка, если бы вы не знали, что режиссёр — Пол Томас Андерсон?'}/>
                        <Card src={card_2} title={'Книга, где описан один скучный день из жизни рекламного агента'} text={'Объёмом почти в тысячу страниц. Иногда без знаков препинания и с переходами на древнеанглийский. В ней одновременно рассказывается о 16 июня 1904 года и об истории литературы, начиная с античных времён. И это всё накладывается на эпическую поэму Гомера. Сколько бы вы поставили на «Улисса» Джеймса Джойса?'}/>
                        <Card src={card_3} title={'Картина, которую повторит даже 5-летний сын маминой подруги'} text={'Ну действительно, там линия, тут кружочек, а здесь и вовсе что-то похожее на инфузорию-туфельку. Никаких полей, лесов, котиков... Сколько бы вы на такое поставили, если бы не знали, что это — одна из революционных работ Кандинского?'}/>
                    </FlexWrapper>
                <LinkWrapper>
                    <Link href="">посмотреть больше</Link>
                </LinkWrapper>

            </Container>
        </StyledLots>
    );
};

const StyledLots = styled.div`
    height: 700px;
    
    ${FlexWrapper} {
        padding: 30px 0;
    }
`
const LinkWrapper = styled.div`
    padding: 0 40px;
`

const Link = styled.a`
    ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.fonts})};
    font-size: 20px;
   
    border-bottom: 2px solid  ${Theme.colors.fonts};
`
