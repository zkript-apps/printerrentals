type T_Title = {
  text: string;
  variant?: "h1" | "h2" | "h3";
  className?: string;
};

const Title = ({ text, variant, className }: T_Title) => {
  const variantStyles = {
    h1: "text-2xl lg:text-[28px]",
    h2: "text-lg lg:text-2xl",
    h3: "text-xl",
  };

  return (
    <p
      className={`font-bold ${className} 
    ${
      // @ts-ignore
      variantStyles[variant]
    }`}
    >
      {text}
    </p>
  );
};

export default Title;
