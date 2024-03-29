import Heading from "../cta/heading";
import Checkmark from "../icons/check";

import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing">
      <Heading id="pricing" title="Our Pricing" />
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4 mb-10 w-124">
          <div className="text-5xl font-serif pb-4">
            <span>Free</span>
            <span className="pl-4 text-base text-gray-400">(forever)</span>
          </div>
          <div className="text-2xl font-serif pb-4">Guppy</div>
          <img
            className="w-48 mx-auto"
            src="/assets/images/base_whale_512.png"
            alt="Blubbr Whale"
          />
          <hr className="my-4" />
          <ul className="text-4xl font-serif pt-4">
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>7 day access to all bots</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Global finance community</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Google search stock data</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Interactive stock analysis</span>
            </li>
          </ul>
          <Link href="/discord">
            <a className="border-gray-300 text-gray-500 border-2 rounded-xl py-2 mt-4 text-center font-light">
              Join our Discord
            </a>
          </Link>
        </div>
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4 mb-10">
          <div className="text-5xl font-serif pb-4">
            <span>$7</span>
            <span className="pl-4 text-base text-gray-400">/ month</span>
          </div>
          <div className="text-2xl font-serif pb-4">Sailor</div>
          <img
            className="w-48 mx-auto"
            src="/assets/images/sailor_whale_512.png"
            alt="Blubbr Whale"
          />
          <hr className="my-4" />
          <ul className="text-4xl font-serif pt-4">
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>All the free benefits</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>NotiFi News Notifications</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>SPAC news summaries</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>SPAC price notifications</span>
            </li>
          </ul>
          <Link href="https://www.patreon.com/bePatron?u=50202907">
            <a className="border-gray-500 border-2 rounded-xl py-2 mt-4 text-center font-light">
              Become a Sailor
            </a>
          </Link>
        </div>
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4 mb-10">
          <div className="text-5xl font-serif pb-4">
            <span>$12</span>
            <span className="pl-4 text-base text-gray-400">/ month</span>
          </div>
          <div className="text-2xl font-serif pb-4">Whaler</div>
          <img
            className="w-48 mx-auto"
            src="/assets/images/whaler_whale_512.png"
            alt="Blubbr Whale"
          />
          <hr className="my-4" />
          <ul className="text-4xl font-serif pt-4">
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>All benefits of Sailor</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>SPAC Merger notifications</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Exclusive Discord access</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Live chat with founders</span>
            </li>
          </ul>
          <Link href="https://www.patreon.com/bePatron?u=50202907">
            <a className="border-black border-2 rounded-xl py-2 mt-4 text-center font-medium">
              Become a Whaler
            </a>
          </Link>
        </div>
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4 mb-10">
          <div className="text-5xl font-serif text-red-light pb-4">
            <span>$20</span>
            <span className="pl-4 text-base text-gray-400">/ month</span>
          </div>
          <div className="text-2xl font-serif text-red-light pb-4">Captain</div>
          <img
            className="w-48 mx-auto"
            src="/assets/images/captain_whale_512.png"
            alt="Blubbr Whale"
          />
          <hr className="my-4" />
          <ul className="text-4xl font-serif pt-4">
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>All benefits of Whaler</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>Whale Watcher alerts</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>SPAC Patrol alerts</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>Early product access</span>
            </li>
          </ul>
          <Link href="https://www.patreon.com/bePatron?u=50202907">
            <a className="border-red-light border-2 bg-red-light text-white hover:shadow-md rounded-xl py-2 mt-4 text-center font-medium">
              Become a Captain
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
