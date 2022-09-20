import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arcana Digital</title>
        <meta
          name="description"
          content="We help businesses and service professionals build thier databases, leverage social media and quit relying on cold calling. Stop being archaic. Go Arcana."
          key="desc"
        />
        <meta
          property="We help businesses and service professionals build thier databases, leverage social media and quit relying on cold calling. Stop being archaic. Go Arcana."
          content="And a social description for our cool page"
        />
      </Head>
      <body>
        <h1>Hello World</h1>
      </body>
    </>
  );
}
