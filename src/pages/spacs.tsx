import CTA from "components/cta/heading";
import Feature from "components/feature/feature";
import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import data from "util/story";
import TrackedPage from "util/GoogleAnalytics";

export default function SpacsForDummies() {
  return (
    <TrackedPage title="About | Blubbr">
      <Navbar />
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
    </TrackedPage>
  );
}
