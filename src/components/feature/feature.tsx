interface FeatureSubpoint {
  body: string;
  icon: JSX.Element;
}

interface FeatureProps {
  title: string;
  image: string;
  content: FeatureSubpoint[];
  isFlipped?: boolean;
}

export default function Feature({
  title,
  image,
  content,
  isFlipped = false,
}: FeatureProps) {
  return (
    <div className="relative mx-auto max-w-7xl mt-15 bg-white dark:bg-gray-800 p-4">
      <div className="lg:grid-cols-2 lg:grid lg:grid-flow-row-dense lg:items-center">
        <div
          className={
            (isFlipped ? "lg:col-start-1" : "lg:col-start-2") + " md:pl-20"
          }
        >
          <h4 className="text-4xl font-serif leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
            {title}
          </h4>
          <ul className="mt-10">
            {content.map((subpoint, _) => (
              <li className="mt-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-9 text-blue-dark">
                      {subpoint.icon}
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col">
                    <h5 className="text-lg self-center align-middle leading-6 text-gray-900 dark:text-white">
                      {subpoint.body}
                    </h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            (isFlipped ? "lg:col-start-2" : "lg:col-start-1") +
            " -my-15 -mx-4 md:-mx-12 relative lg:mt-0"
          }
        >
          <img
            src={image}
            alt={title}
            className="relative mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
