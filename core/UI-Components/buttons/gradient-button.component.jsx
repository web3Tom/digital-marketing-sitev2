export const GradientButton = ({ link, buttonTarget, content }) => {
  return (
    <a
      href={link}
      target={buttonTarget}
      className="text-white text-center tracking-tighter  rounded-full text-xs px-3 py-[5px] md:py-[6px] md:px-4  md:text-lg md:font-semi-bold bg-gradient-to-tl to-blue-600 via-green-600 from-blue-600 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring-4 focus:outline-none focus:ring-green-200"
    >
      {content}
    </a>
  );
};
