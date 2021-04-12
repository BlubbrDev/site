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

export default function Home() {
  return (
    <>
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
    </>
  );
}
