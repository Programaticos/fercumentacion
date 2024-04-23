import styled from 'styled-components';

const Parrafo = styled.p`
    color: black;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    `;

export default function Textoencabezados() {
    return (
        <Parrafo>
            
    <h1>Encabezados</h1>
    <p>Los encabezados se utilizan para definir títulos y subtítulos en una página web.</p>
    <h2>Etiqueta h1</h2>
    <p>La etiqueta h1 se utiliza para definir el título principal de una página web.</p>
    <p>Una etiqueta h1 es el título principal de una página web y es el más importante, debe haber sólo uno por página.</p>
    <h2>Etiqueta h2</h2>
    <p>La etiqueta h2 se utiliza para definir un título secundario en una página web.</p>
    <p>Una etiqueta h2 es un título secundario y es menos importante que un título h1, puede haber unas pocas por página</p>
    <h2>Etiqueta h3</h2>
        </Parrafo>
    )
}