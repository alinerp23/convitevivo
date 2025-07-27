import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ConviteVivo</title>
        <meta name="description" content="Seu convite em vídeo" />
      </Head>
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ fontSize: "2rem" }}>ConviteVivo 💌</h1>
        <p style={{ marginTop: "1rem" }}>Aqui nasce o seu convite em vídeo</p>
      </main>
    </>
  );
}
