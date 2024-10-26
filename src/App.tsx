import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {GlobalStyle} from "./styles/Global.styled";



function App() {
    return (
        <StylledSection>

            <Header/>
        </StylledSection>
    );
}

export default App;

const StylledSection = styled.div` `

