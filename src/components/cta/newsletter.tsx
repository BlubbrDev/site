interface NewsletterProps {
  title: string;
  subtitle: string;
}

export default function Newsletter({ title, subtitle }: NewsletterProps) {
  return (
    <section
      id="newsletter"
      className="mt-10 py-32 bg-blue-darkest bg-repeat"
      // style={{
      //   backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23ffffff' fill-opacity='0.04' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E\")",
      // }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-blue-light font-medium">{subtitle}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <form className="mr-4" action="#" method="POST">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-2 block w-full font- shadow-md sm:text-lg rounded-lg"
            />
          </form>
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center px-5 py-2 outline-none text-ls font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
