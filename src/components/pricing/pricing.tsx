import Heading from "../cta/heading";
import Checkmark from "../icons/check";

export default function Pricing() {
  return (
    <section>
      <Heading title="Our Pricing" />
      <div className="flex flex-row justify-center">
        <div className="flex flex-col shadow-lg rounded-lg p-10 m-10">
          <div className="text-6xl font-serif pb-4">Free</div>
          <div className="text-2xl font-serif pb-4">Guppy</div>
          <hr />
          <ul className="text-4xl font-serif pt-4">
            <li className="flex flex-row">
              <Checkmark />
              7-Day free access to all 4 bots
            </li>
            
          </ul>
          <div>Join our Discord</div>
        </div>
      </div>
    </section>
  );
}
