interface CTAProps {
  title: string;
}

export default function CTA({ title }: CTAProps) {
  const words = title.split(" ");
  const blackWords = words
    .filter((_, index, __) => index !== words.length - 1)
    .join(" ");
  const redWord = words[words.length - 1];
  return (
    <div className="bg-white dark:bg-gray-800 mt-20">
      <div className="text-center w-full mx-auto px-4 sm:px-6 lg:pb-16">
        <h2 className="sm:text-5xl md:text-6xl font-serif font-extrabold text-black dark:text-white">
          <span>{blackWords + " "}</span>
          <span className="text-red-light">{redWord}</span>
        </h2>
      </div>
    </div>
  );
}
