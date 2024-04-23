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
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(
                (e:number , i: number) => 
                    {return(<DivSelecto
                        key={i}
                    onClick= {() => {
                        props.setContenidoPresente(i);
                    }}
                    selected={props.contenidoPresente === i ? 
                        true : false}
                    >
                    {e}. Hola 
                    </DivSelecto>
            );
        }
    )}
            </DivContainerSelector>
            

            
    );
}