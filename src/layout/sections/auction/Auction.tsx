import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import logo_white from '../../../assets/images/logo_white.svg'
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Auction = () => {
    return (
        <StyledAuction>
            <Container>
                <FlexWrapper gap={'80px'}>
                    <ContentLogo>
                        <Icon src={logo_white} alt=""/>
                    </ContentLogo>
                    <Content>
                        <SectionTitle>Об аукционе</SectionTitle>
                        <ContentText>
                            <Text>Здесь вы не встретите очередное пафосное собрание невероятно дорогого антиквариата.
                                Наши лоты
                                вообще не должны были попасть ни на один аукцион. Потому что кому нужен дневник
                                девочки-подростка или картина, которую может нарисовать даже ребёнок? Кому нужны все эти
                                странные вещи, созданные любителями?</Text>
                            <Text>Слишком сложные или, наоборот, слишком простые. Опережающие своё время. В пух и прах
                                растерзанные
                                критиками. Непринятые и непонятые. Когда-то они казались просто неудачными. Но, несмотря
                                на критику, кажущуюся простоту или сложность, сейчас без этих лотов невозможно
                                представить
                                современную культуру. Когда в эти вещи не верил никто, продолжали верить их создатели. И
                                сейчас
                                эти лоты стали культовыми. </Text>
                        </ContentText>
                    </Content>
                </FlexWrapper>
            </Container>
        </StyledAuction>
    );
};


const StyledAuction = styled.section`
    
`
const ContentLogo = styled.div`
    position: relative;
    width: 150%;
    max-width: 240px;
    height: 240px;
    background-color: ${Theme.colors.fonts};
    border-radius: 50%;
`
const Icon = styled.img`
    position: absolute;
    top: 60px;
    left: 45px;
`
const Content = styled.div`
    display: flex;
    gap: 100px;
    align-self: flex-end;
    flex-direction: column;;
    padding-top: 100px
`
const ContentText = styled.div`
    
`
const Text = styled.p`
    ${font({family: '"Raleway" sans-serif', weight: 400, color: Theme.colors.fonts})};
    font-size: 20px;
    letter-spacing: 0.2px;
    
    &:first-of-type {
        padding-bottom: 25px;
    }
`