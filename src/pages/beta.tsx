import CTA from "../components/cta/heading";
import Newsletter from "../components/cta/newsletter";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";

export default function Beta() {
  return (
    <>
      <Head>
        <title>API | Blubbr</title>
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
      <CTA id="beta" title="Our API is in Private-Beta" />
      <Newsletter
        title="Want a sneek peek?"
        subtitle="Send us your email for early access."
      />
      <Footer />
    </>
  );
}
