import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    color: black;
    font-family: 'Poppins', sans-serif;
    
`;


export default function TituloPagina(props: any) {
    return (

        <Title>{props.titulo}</Title>);
        
    
}