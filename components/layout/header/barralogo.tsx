
import styled from 'styled-components';
import Logo from './logo';
import Contenidologo from './contenidologo';

const MainSty = styled.main`
display: flex;
justify-content: space-around;
flex-direction: row;
`;


export default function Barralogo() {
    return (
        <MainSty>
            <Logo />
            <Contenidologo />
        </MainSty>
    );
}