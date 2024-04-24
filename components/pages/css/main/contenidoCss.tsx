import styled from 'styled-components';
import { cssJsonData } from '@/data/moc/css';
import BotonEjemplo from './botonejemplo';
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
display: flex;
flex-direction: column;
margin: 48px;
background-color: #C9E265;
padding: 20px;
color: #48744C;
border-radius: 8px;
margin-top: 2;
height: 80%;
top: -2px;
font-family: 'Poppins', sans-serif;

`;
const DivButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;



export default function ContenidoCss(props: any){
    return (
        <DivContainerContenido>
            <TituloH2>{cssJsonData[props.contenidoPresente]?.titulo}
            </TituloH2>
            <DivDescriptionContainer>
            <div>
            {cssJsonData[props.contenidoPresente]?.descripcion}
            <br/>
            <br/>
            Ejemplos:
            </div>
                <DivButton>
                    
                {cssJsonData[props.contenidoPresente]?.ejemplos?.map(
                    (ejemplo: any, i: number) => {
                    return <BotonEjemplo ejemplo={ejemplo} key={i}/>
                }
                )}
                </DivButton>
            
            </DivDescriptionContainer>
        </DivContainerContenido>
    )
}