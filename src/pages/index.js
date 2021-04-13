import CTA from "../components/cta/heading";
import Newsletter from "../components/cta/newsletter";
import Feature from "../components/feature/feature";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

import data from "../util/story";
import Banner from "../components/banner/banner";
import Pricing from "../components/pricing/pricing";
import JoinDiscord from "../components/cta/join_discord";
import TrackedPage from "../util/GoogleAnalytics";
import Head from "next/head";

export default function Home() {
  return (
    <TrackedPage>
      <Head>
        <title>Blubbr</title>
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
      <Hero />
      <CTA id="bots" title="Meet the Bots" />
      {data.map(
        (value, index) =>
          index % 2 == 0 &&
          index > 1 && (
            <Feature
              title={value.title}
              image={value.image}
              content={value.content}
              isFlipped={(index / 2) % 2 === 0}
            />
          )
      )}
      <Newsletter
        title="Don't miss out!"
        subtitle="Stay up-to-date with our newsletter."
      />
      <Pricing />
      <JoinDiscord />
      <Footer />
    </TrackedPage>
  );
}
