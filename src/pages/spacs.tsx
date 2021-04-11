import CTA from "../components/cta/cta";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

import data from "../util/story";

export default function SpacsForDummies() {
  return (
    <>
      <Navbar />
      <CTA title="What is a SPAC?"/>
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
