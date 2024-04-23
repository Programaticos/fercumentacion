
import TituloPagina from '@/titulo';
import styled from 'styled-components';
import Logoizd from './logo';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Nav = styled.nav`
  border-bottom: 1px solid #dcdcdc;
  flex direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-around;
  width: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  justify-content: space-around;
`;

const Img = styled.img`

transition: transform 0.3s ease-in-out;
display: block;
&:hover {
transform: scale(1.2);
}
  `;

export default function Barranav() {
  return (
    <>
    

    <Container>
    <Nav>
    <Link href="../">
      <Img src="/img/fercumentacion.png" alt="Documentación" width="100" height="100" />
      </Link>
        <Link href="/HTML">
          <Img src="/img/html.png" alt="HTML5" width="50" height="50" />
        </Link>
        <Link href="/CSS">
          <Img src="/img/css.png" alt="CSS3" width="50" height="50" />
        </Link>
        <Link href="/JS">
          <Img src="/img/js.png" alt="JavaScript" width="50" height="50" />
        </Link>
        <Link href="/Angular">
          <Img src="/img/angular.png" alt="Angular" width="36" height="36" />
        </Link>
        <Link href="/React">
          <Img src="/img/react.png" alt="React" width="50" height="50" />
        </Link>
        <Link href="/TS">
          <Img src="/img/ts.png" alt="TypeScript" width="50" height="40" />
        </Link>
      </Nav>
      </Container>
      </>
  
  );
}
