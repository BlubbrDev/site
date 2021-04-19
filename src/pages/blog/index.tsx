import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import TrackedPage from "util/GoogleAnalytics";
import { getSortedPostsData } from "lib/posts";

export default function Home({ allPostsData }) {
  return (
    <TrackedPage title="Blog | Blubbr">
      <Navbar />
      <section className="bg-red-200  max-w-7xl mx-auto">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </TrackedPage>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
