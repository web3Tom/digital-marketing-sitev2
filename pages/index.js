import Head from 'next/head';
import HomeIndex from '../components/home/HomeIndex.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Countryside Media</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="We help businesses and service professionals build thier databases, leverage social media and quit relying on cold calling."
          key="desc"
        />
        <meta
          property="We help businesses and service professionals build thier databases, leverage thier existing database, manage google and social engagement, quit relying on cold calling."
          content="And a social description for our cool page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/fxa5wei.css"
        ></link>
      </Head>
      <HomeIndex />
    </>
  );
}
