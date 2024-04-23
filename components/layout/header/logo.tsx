import styled from 'styled-components';

const Logoizd = styled.div`

width: 10vw;
height: 10vh;
margin-bottom: 20px;
`;


export default function Logo(){
    return (
        <Logoizd>
            <a href="../"><img src="/img/fercumentacion.png" alt="Documentación" width="100" height="100" /></a>
        </Logoizd>
    )
}