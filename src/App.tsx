import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/main/Main";
import {Lots} from "./layout/sections/lots/Lots";
import {Auction} from "./layout/sections/auction/Auction";
import {Footer} from "./layout/Footer/Footer";



function App() {
    return (
        <StylledSection>
            <Header/>
            <Main/>
            <Lots/>
            <Auction/>
            <Footer/>
        </StylledSection>
    );
}

export default App;

const StylledSection = styled.div` `

