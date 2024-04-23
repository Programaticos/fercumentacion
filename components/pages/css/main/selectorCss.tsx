import styled from 'styled-components';

const DivContainerSelector = styled.div`

background-color: white;
width: 20vw;
height: 70vh;
overflow: scroll;
overflow-x: hidden;

`;

const DivSelecto = styled.div<{selected : boolean}>`
background-color: #C9E265;
${(props) => props.selected && "background-color : #48744C;"}
${(props) => props.selected && "color:#C9E265;"}
margin: 5px;   
font-family: 'Poppins', sans-serif, bold;
border-radius: 3px;
height: 20px;
display: flex;
align-items: center;
padding: 5px;
cursor: pointer;
`;



export default function SelectorCss(props: any){
    return (
        <DivContainerSelector>
            {['Introducción','Sintaxis','Selectores','¿Cómo se hace?','Comentarios','Colores','Fondo','Bordes','Márgenes','Padding','Alto/Ancho','Box Model','Contorno','Texto','Fuentes','Iconos','Enlaces','Tablas','Display','Max-Width','Posición','Z-Index','Overflow','Float'].map(
                (e:number , i: number) => 
                    {return(<DivSelecto
                        key={i}
                    onClick= {() => {
                        props.setContenidoPresente(i);
                    }}
                    selected={props.contenidoPresente === i ? 
                        true : false}
                    >
                    {e}
                    </DivSelecto>
            );
        }
    )}
            </DivContainerSelector>
            

            
    );
}