export const SectionHeader = ({
  title,
  eyebrows,
  description,
}: {
  title: string;
  eyebrows: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrows}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6">{title}</h2>
      <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4 lg:text-xl">
        {description}
      </p>
    </>
  );
};
