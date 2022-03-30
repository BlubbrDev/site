import Banner from "../components/banner/banner";
import CTA from "../components/cta/heading";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import data from "../util/story";

export default function SpacsForDummies() {
  return (
    <>
      <Head>
        <title>About | Blubbr</title>
        <meta property="og:title" content="Blubbr" />
        <meta
          property="og:description"
          content="Blubbr is the global leader in real-time automated notifications for key events in the lifecycle of every SPAC."
        />
        <meta property="og:image" content="/assets/images/base_whale_512.png" />
        <meta name="twitter:card" content="/assets/images/base_whale_512.png" />
        <meta name="twitter:title" content="Blubbr" />
        <meta
          name="twitter:description"
          content="Blubbr is the global leader in real-time automated notifications for key events in the lifecycle of every SPAC."
        />
        <meta
          name="twitter:image"
          content="/assets/images/base_whale_128.png"
        />
      </Head>
      <Navbar />
      <Banner />
      <CTA id="about" title="What is a SPAC?" />
      {data.map(
        (value, index) =>
          (index % 2 === 1 || index === 0) && (
            <Feature
              title={value.title}
              image={value.image}
              content={value.content}
              isFlipped={((index - 1) / 2) % 2 === 0}
            />
          )
      )}
      <Footer />
    </>
  );
}
