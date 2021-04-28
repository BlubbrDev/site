import CTA from "components/cta/heading";
import Newsletter from "components/cta/newsletter";
import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import TrackedPage from "util/GoogleAnalytics";

export default function Beta() {
  return (
    <TrackedPage title="API | Blubbr">
      <Navbar />
      <CTA id="beta" title="Our API is in Private-Beta" />
      <Newsletter
        title="Want a sneek peek?"
        subtitle="Send us your email for early access."
      />
      <Footer />
    </TrackedPage>
  );
}
