import Head from "next/head";
import Image from "next/image";
import Barranav from "../../components/layout/header/barranav";
import TituloPagina from "@/titulo";
import MainContainerCss from "@/components/pages/css/main/maincontainerCss";
import styled from "styled-components";
const MainStyles = styled.main`
display: flex;
justify-content: space-around;
flex-direction: row;
`;


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <header>
      <Barranav />
      </header>
      <MainStyles>
        <MainContainerCss />
      </MainStyles>
      <footer>
      </footer>
    </>
  );
}
