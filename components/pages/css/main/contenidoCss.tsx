import styled from 'styled-components';

const DivContainerContenido = styled.div`
background-color:  white;
width: 80vw;
height: 70vh;
`;

const TituloH2 = styled.h2`
margin: 5px;
bottom: 32px;
margin-bottom: 0;
background-color: #C9E265;
height: 100px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
color: #48744C;
font-size: 54px;
font-family: 'Poppins', sans-serif;
`;

const DivDescriptionContainer = styled.div`
margin: 48px;
background-color: #C9E265;
padding: 20px;
color: #48744C;
border-radius: 8px;
margin-top: 2;
height: 375px;
top: -2px;
font-family: 'Poppins', sans-serif;

`;


export default function ContenidoCss(props: any){
    return (
        <DivContainerContenido>
            <TituloH2>{props.contenidoPresente}
            </TituloH2>
            <DivDescriptionContainer>
            
            <p>
            El CSS (Cascading Style Sheets) es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en HTML o XML
            (y por extensión en XHTML). El CSS separa el contenido de la representación visual del sitio. La idea es separar la estructura de un documento de su presentación. 
            El CSS se encarga de la presentación de la página web, es decir, de la forma en que se ve. El HTML se encarga de la estructura de la página web, es decir, de la forma 
            en que está organizada la información.
            </p>
            </DivDescriptionContainer>
        </DivContainerContenido>
    )
}