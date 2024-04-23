import styled from 'styled-components';

const Parrafo = styled.p`
    color: red;
    font-size: 20px;
    font-weight: bold;
    background-color: #000;
    `;

export default function AmorCss() {
    return (
        <Parrafo>Esto es un parrafo con estilos</Parrafo>
    )
}