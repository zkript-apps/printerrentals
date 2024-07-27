import { Typography } from "@/common/components/ui/Typography";

type T_Description = {
  text: string;
  className?: string;
};

const Description = ({ text, className }: T_Description) => {
  return (
    <Typography variant="h2" className={className}>
      {text}
    </Typography>
  );
};

export default Description;
