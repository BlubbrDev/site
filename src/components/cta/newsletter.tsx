export default function Newsletter() {
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
          <form className="mr-4" action="#" method="POST">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-4 block w-full shadow-md sm:text-lg rounded-lg"
            />
          </form>
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 outline-none text-lg font-light rounded-md text-white bg-blue-dark hover:bg-blue-darker"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
