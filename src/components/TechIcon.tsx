export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 text-sky-400" />
      <svg className="siz-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgba(110 231 183)" />
          <stop offset="100%" stopColor="rgba(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
