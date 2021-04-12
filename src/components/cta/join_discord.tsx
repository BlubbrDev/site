import Link from "next/link";

export default function JoinDiscord() {
  return (
    <div className="mt-10 bg-blue-darkest">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-dark">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Link href="/discord">
            <a className="px-5 py-3 outline-none text-xl font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker">
              Join Discord
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
