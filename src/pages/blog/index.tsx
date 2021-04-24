import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import TrackedPage from "util/GoogleAnalytics";
import { getSortedPostsData } from "lib/posts";
import Date from "util/date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  const firstPost = allPostsData[0];
  console.log(firstPost);
  return (
    <TrackedPage title="Blog | Blubbr">
      <Navbar />
      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
        <section className="grid grid-rows-3 grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-4 pt-4">
          <main className="row-span-3 col-span-1">
            <Link href={"/blog/" + firstPost.data.id}>
              <img
                className="h-52 2xl:h-72 w-full object-cover cursor-pointer"
                src={firstPost.data.img}
              />
            </Link>
            <div>
              <h2 className="font-serif text-3xl font-bold pt-4">
                {firstPost.data.title}
              </h2>
              <p className="font-sans text-md text-gray-700 py-3 truncate">
                {firstPost.excerpt}
              </p>
              <p className="font-sans text-sm text-gray-700">
                In {firstPost.data.tags}
              </p>
              <p className="font-sans text-sm text-gray-700">
                <Date dateString={firstPost.data.date} />
              </p>
            </div>
          </main>
          {allPostsData.map(
            (post, index) =>
              index > 0 &&
              index < 4 && (
                <div className="col-span-1 flex flex-row lg:pl-8">
                  <Link href={"/blog/" + firstPost.id} passHref>
                    <a>
                      <img
                        className="inline flex-none w-40 h-32 object-cover mr-4"
                        src={post.data.img}
                      />
                    </a>
                  </Link>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl font-semibold pb-2">
                      {post.data.title}
                    </h2>
                    <p className="font-sans text-sm text-gray-700">
                      In {post.data.tags}
                    </p>
                    <p className="font-sans text-sm text-gray-700">
                      <Date dateString={post.data.date} />
                    </p>
                  </div>
                </div>
              )
          )}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 mt-12">
          <aside className="mt-4 md:col-span-2 md:mr-8 w-100">
            <div className="border-b border-gray-200">
              <h2 className="inline font-serif text-3xl font-black my-4 border-b-2 border-gray-700">
                All Stories
              </h2>
            </div>
            {allPostsData.map((post) => (
              <div className="col-span-1 flex flex-row my-4">
                <img
                  className="inline flex-none w-28 h-24 lg:w-48 lg:h-48 object-cover mr-4"
                  src={post.data.img}
                />
                <div className="flex-1 w-100">
                  <h2 className="font-serif text-lg lg:text-2xl font-bold pb-2">
                    {post.data.title}
                  </h2>
                  <p className="font-sans text-md w-auto text-gray-700 py-3 truncate max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xl">
                    {firstPost.excerpt}
                  </p>
                  <p className="font-sans text-sm lg:text-md text-gray-700">
                    In {post.data.tags}
                  </p>
                  <p className="font-sans text-sm lg:text-md text-gray-700">
                    <Date dateString={post.data.date} />
                  </p>
                </div>
              </div>
            ))}
          </aside>
          <aside className="mt-4 md:col-span-1">
            <div className="md:sticky md:top-24">
              <div className="border-b border-gray-200">
                <h2 className="inline font-serif text-3xl font-black my-4 border-b-2 border-gray-700">
                  Featured
                </h2>
              </div>
              {allPostsData.map((post, index) => (
                <div className="col-span-1 flex flex-row my-4">
                  <h3 className="text-gray-300 font-serif text-3xl font-black mr-4">
                    {"0" + (index + 1)}
                  </h3>
                  <div key={post.data.id}>
                    <h4 className="font-serif text-lg lg:text-xl font-bold pb-2">
                      {post.title}
                    </h4>
                    <p className="font-sans text-sm lg:text-md text-gray-700">
                      In {post.data.tags}
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
