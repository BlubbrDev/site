import CTA from "../components/cta/cta";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

import data from "../util/story";

export default function About() {
  return (
    <>
      <Navbar />
      <CTA />
      {data.map((value, index) => (
        <Feature
          title={value.title}
          image={value.image}
          content={value.content}
          isFlipped={index % 2 === 0}
        />
      ))}
      <Footer />
    </>
  );
}
