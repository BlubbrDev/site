import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import TrackedPage from "util/GoogleAnalytics";
import { getSortedPostsData } from "lib/posts";

export default function Home({ allPostsData }) {
  return (
    <TrackedPage title="Blog | Blubbr">
      <Navbar />
      <section className="bg-red-200  max-w-7xl mx-auto">
        <main>
          {allPostsData.map(({ id, date, title, img }) => (
            <div key={id}>
              {title}
              <br />
              <img className="h-48 object-cover" src={img} />
              <br />
              {id}
              <br />
              {date}
            </div>
          ))}
        </main>
        <aside className="bg-blue-200">Section</aside>
      </section>
      <section className="bg-green-200">Section</section>
      <aside className="bg-purple-200">Section</aside>
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
