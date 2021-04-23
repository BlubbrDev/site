import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import TrackedPage from "util/GoogleAnalytics";
import { getSortedPostsData } from "lib/posts";

export default function Home({ allPostsData }) {
  const firstPost = allPostsData[0];
  return (
    <TrackedPage title="Blog | Blubbr">
      <Navbar />
      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
        <section className="grid grid-rows-3 grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-4 pt-4">
          <main className="row-span-3 col-span-1">
            <img className="h-52 w-full object-cover" src={firstPost.img} />
            <div key={firstPost.id}>
              <h2 className="font-serif text-3xl font-bold pt-4">
                {firstPost.title}
              </h2>
              <br />
              <p className="font-sans text-sm text-gray-700">
                In {firstPost.tags}
              </p>
              <p className="font-sans text-sm text-gray-700">
                {firstPost.date}
              </p>
            </div>
          </main>
          {allPostsData.map(
            (post, index) =>
              index > 0 &&
              index < 4 && (
                <div className="col-span-1 flex flex-row">
                  <img
                    className="inline w-28 h-24 object-cover mr-4"
                    src={post.img}
                  />
                  <div key={post.id}>
                    <h2 className="font-serif text-xl font-bold pb-2">
                      {post.title}
                    </h2>
                    <p className="font-sans text-sm text-gray-700">
                      In {post.tags}
                    </p>
                    <p className="font-sans text-sm text-gray-700">
                      {post.date}
                    </p>
                  </div>
                </div>
              )
          )}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 mt-12">
          <aside className="mt-4 md:col-span-2 md:mr-8">
            <div className="border-b border-gray-200">
              <h2 className="inline font-serif text-3xl font-bold my-4 border-b-2 border-gray-700">
                All Stories
              </h2>
            </div>
            {allPostsData.map((post) => (
              <div className="col-span-1 flex flex-row my-4">
                <img
                  className="inline w-28 h-24 lg:w-48 lg:h-48 object-cover mr-4"
                  src={post.img}
                />
                <div key={post.id}>
                  <h2 className="font-serif text-lg lg:text-2xl font-bold pb-2">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm lg:text-md text-gray-700">
                    In {post.tags}
                  </p>
                  <p className="font-sans text-sm lg:text-md text-gray-700">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </aside>
          <aside className="mt-4 md:col-span-1">
            <div className="md:sticky md:top-24 border-b border-gray-200">
              <h2 className="inline font-serif text-3xl font-bold my-4 border-b-2 border-gray-700">
                Featured
              </h2>
              {allPostsData.map((post, index) => (
                <div className="col-span-1 flex flex-row my-4">
                  <h3 className="text-gray-300 font-serif text-3xl font-black mr-4">
                    {"0" + ++index}
                  </h3>
                  <div key={post.id}>
                    <h4 className="font-serif text-lg lg:text-xl font-bold pb-2">
                      {post.title}
                    </h4>
                    <p className="font-sans text-sm lg:text-md text-gray-700">
                      In {post.tags}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
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
