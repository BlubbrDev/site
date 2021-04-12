import Heading from "../cta/heading";
import Checkmark from "../icons/check";

import Link from "next/link";

export default function Pricing() {
  return (
    <section>
      <Heading title="Our Pricing" />
      <div className="flex flex-row flex-wrap justify-center mx-20">
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4">
          <div className="text-5xl font-serif pb-4">
            <span>Free</span>
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
              <span>7d free access to all bots</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>global finance community</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>google search stock data</span>
            </li>
            <li className="flex flex-row content-center font-sans text-base font-light text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>interactive stock analysis</span>
            </li>
          </ul>
          <Link href="/discord">
            <a className="border-gray-300 text-gray-500 border-2 rounded-xl py-2 mt-4 text-center font-light">
              Join our Discord
            </a>
          </Link>
        </div>
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4">
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
              <span>all the free benefits</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>global finance commuinity</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>interactive stock analysis</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Notifi News Notifications</span>
            </li>
          </ul>
          <Link href="https://www.patreon.com/bePatron?u=50202907">
            <a className="border-gray-500 border-2 rounded-xl py-2 mt-4 text-center font-light">
              Become a Sailor
            </a>
          </Link>
        </div>
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4">
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
              <span>all benefits of Sailor</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>SPAC Merger Notifications</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-black" />
              <span>Exclusive discord access</span>
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
        <div className="flex flex-col shadow-md hover:shadow-xl rounded-xl p-10 mx-4">
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
              <span>all benefits of Whaler</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>Whale Watcher Alerts</span>
            </li>
            <li className="flex flex-row content-center font-sans font-light text-base text-gray-500">
              <Checkmark className="w-4 h-4 pt-1 mr-4 -ml-4 text-red-light" />
              <span>SPAC Patrol Alerts</span>
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
