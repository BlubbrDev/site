import CTA from "../components/cta/heading";
import Newsletter from "../components/cta/newsletter";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

export default function Beta() {
  return (
    <>
      <Navbar />
      <CTA title="Our API is in Private-Beta" />
      <Newsletter
        title="Want a sneek peek?"
        subtitle="Send us your email for early access."
      />
      <Footer />
    </>
  );
}
