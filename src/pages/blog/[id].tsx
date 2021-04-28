import TrackedPage from "util/GoogleAnalytics";
import Footer from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import { getAllPostIds, getPostData } from "lib/posts";
import Image from "next/image";
import Date from "util/date";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <TrackedPage title={postData.title}>
      <Navbar isNotSticky />
      <div className="max-w-2xl px-4 mx-auto mt-16 text-gray-800">
        <span className="uppercase font-sans font-bold text-red-light text-md">
          {postData.tags}
        </span>
        <h1 className="text-5xl font-serif my-4">{postData.title}</h1>
        <div className="flex flex-row">
          <Image
            className="rounded-full mr-4"
            height="50"
            width="50"
            src="/assets/profiles/justin_shaw.jpg"
          />
          <div className="flex flex-col justify-between ml-4">
            <div className="flex flex-row">
              <span>Justin Shaw</span>
              <Link href="/" passHref>
                <a className="whitespace-nowrap text-xs px-2 py-1 mx-2 rounded-full shadow-sm text-white bg-blue-dark hover:bg-blue-darker">
                  Follow
                </a>
              </Link>
            </div>
            <div className="flex flex-row text-gray-600 text-sm">
              <Date dateString={postData.date} />
              <span className="px-1">–</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
        <br />
        <div
          id="blubbr-content"
          className="font-prose text-xl font-light leading-prose pt-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Image
              className="rounded-full mr-4 py-auto"
              height="70"
              width="70"
              src="/assets/profiles/justin_shaw.jpg"
            />
            <div className="flex flex-col ml-4 w-100">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="uppercase text-sm font-light pt-2">
                    WRITTEN BY
                  </span>
                  <span className="text-2xl font-black font-prose">
                    Justin Shaw
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="my-auto">
            <Link href="/" passHref>
              <a className="whitespace-nowrap text-lg px-4 py-2 rounded-full shadow-sm text-white bg-blue-dark hover:bg-blue-darker">
                Follow me
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </TrackedPage>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
