interface NewsletterProps {
  title: string;
  subtitle: string;
}

export default function Newsletter({ title, subtitle }: NewsletterProps) {
  return (
    <section id="newsletter" className="mt-10 py-32 bg-blue-darkest bg-repeat">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-blue-light font-medium">{subtitle}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <form className="mr-4" id="mc-form" name="mc-embedded-subscribe-form" action="https://blubbr.us1.list-manage.com/subscribe/post?u=620a18422b78481eb1e7e0320&amp;id=bcb1f8eb89" method="POST" target="_blank">
            <div className="flex flex-row" id="mc_embed_signup_scroll">
              <input
                className="inline-flex px-4 mx-4 py-2 w-full font-light shadow-md sm:text-md rounded-lg outline-none"
                type="text"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Enter your email"
                required
              />
              <input
                className="inline-flex items-center justify-center px-5 py-2 outline-none text-md font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker"
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
