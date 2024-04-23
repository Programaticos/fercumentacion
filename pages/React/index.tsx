import Head from "next/head";
import Image from "next/image";
import Barranav from "../../components/layout/header/barranav";



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
      
      <main>
        <h1>La documentación de React más completa jamás creada</h1>
      </main>
      <div>
        <a href = "React/Componentes">Componentes</a>
      </div>

      <div>
        <a href = "React/Estados">Estados</a>
      </div>

      
    </>
  );
}

