import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="md:mb-40 grid md:grid-flow-col md:grid-cols-2 mx-auto max-w-6xl px-4 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-20">
      <div className="text-center order-last md:order-first lg:text-left mt-10">
        <h1 className="text-7xl font-extrabold font-serif text-gray-900 sm:text-8xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">
            Cutting <span className="xl:inline text-red-light">fat </span>
          </span>
          <span className="block">
            off the <span className="xl:inline text-red-light">whales </span>
          </span>
        </h1>
        <p className="mt-3 text-base font-light text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Blubbr is the global leader in real-time automated notifications for
          key events in the lifecycle of every SPAC.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/discord">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker md:py-4 md:text-lg md:px-10">
                Join Discord
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/spacs">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-light rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                What is a SPAC?
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="w-100 h-100 z-0 order-first md:order-last"
        src="/assets/images/hero_boat.png"
        alt="Cut the fat off whales"
        quality={100}
        objectFit="contain"
        width={500}
        height={500}
      />
    </main>
  );
}
