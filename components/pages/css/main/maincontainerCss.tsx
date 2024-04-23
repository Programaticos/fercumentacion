import { useState } from 'react';
import ContenidoCss from './contenidoCss';
import SelectorCss from './selectorCss';
import styled from 'styled-components';



export default function MainContainerCss() {
    const [contenidoPresente, setContenidoPresente] = useState <number>(0);
    return (
        <>
            <SelectorCss contenidoPresente = {contenidoPresente}
            setContenidoPresente = {setContenidoPresente}/>
            
            <ContenidoCss contenidoPresente = {contenidoPresente}/>
        </>
    );
}