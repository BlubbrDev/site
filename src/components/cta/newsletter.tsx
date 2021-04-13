import { useEffect, useState } from "react";
import axios from "axios";
interface NewsletterProps {
  title: string;
  subtitle: string;
}

export default function Newsletter({ title, subtitle }: NewsletterProps) {
  const [isSubmitted, setIsSumbitted] = useState(false);
  useEffect(() => {
    console.log("starting");
    let url =
      "https://blubbr.us1.list-manage.com/subscribe/post?u=620a18422b78481eb1e7e0320&amp;id=bcb1f8eb89";
    let form = document.getElementById("mc-form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      console.log("submitting");
      let formData = new FormData(form);
      axios({
        method: "POST",
        url: url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          crossdomain: true,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.status == 200 && setIsSumbitted(true))
        .catch((err) => console.error(err));
      event.preventDefault();
    });
  }, []);
  return (
    <section id="newsletter" className="mt-10 py-32 bg-blue-darkest bg-repeat">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-blue-light font-medium">{subtitle}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <form className="mr-4" id="mc-form" name="mc-embedded-subscribe-form">
            <div className="flex flex-row" id="mc_embed_signup_scroll">
              {!isSubmitted && (
                <input
                  className="inline-flex px-4 mx-4 py-2 w-full font-light shadow-md sm:text-md rounded-lg outline-none"
                  type="text"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                  required
                />
              )}
              {isSubmitted ? (
                <div className="inline-flex items-center justify-center px-5 py-2 outline-none text-md font-light rounded-md text-white bg-blue-darker">
                  Subscribed!
                </div>
              ) : (
                <input
                  className="inline-flex items-center justify-center px-5 py-2 outline-none text-md font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
