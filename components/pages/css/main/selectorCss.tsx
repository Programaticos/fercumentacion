import styled from 'styled-components';
import { cssJsonData } from '@/data/moc/css';

const DivContainerSelector = styled.div`

background-color: white;
width: 20vw;
height: 80vh;
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
    console.log(cssJsonData);
    return (
        <DivContainerSelector>
            {cssJsonData.map(
                (e:any , i: number) => 
                    {return(<DivSelecto
                        key={i}
                    onClick= {() => {
                        props.setContenidoPresente(cssJsonData.indexOf(e));
                    }}
                    selected={props.contenidoPresente === i ? true : false}
                    >
                    {e ?.titulo}
                    </DivSelecto>
            );
        }
    )}
            </DivContainerSelector>
            

            
    );
}