interface CTAProps {
  title: string;
  id: string;
}

export default function Heading({ title, id }: CTAProps) {
  const words = title.split(" ");
  const blackWords = words
    .filter((_, index, __) => index !== words.length - 1)
    .join(" ");
  const redWord = words[words.length - 1];
  return (
    <div id={id} className="bg-white dark:bg-gray-800 mt-20 mx-auto max-w-6xl">
      <div className="flex w-full mx-auto px-4 sm:px-6 lg:pb-16">
        <div className="flex-1 self-center h-0.5 bg-gray-100 w-100" />
        <h2 className="flex-none px-4 sm:text-5xl md:text-6xl font-serif font-extrabold text-black dark:text-white">
          <span>{blackWords + " "}</span>
          <span className="text-red-light">{redWord}</span>
        </h2>
        <div className="flex-1 self-center h-0.5 bg-gray-100 w-100" />
      </div>
    </div>
  );
}
