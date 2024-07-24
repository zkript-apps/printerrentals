import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

type T_ItemContainer = {
  id: string;
  model: string;
  image: any;
  pricePerMonth: string;
};

const ItemContainer = ({
  id,
  model,
  image,
  pricePerMonth,
}: T_ItemContainer) => {
  return (
    <Link href={"/printers/" + id}>
      <div className="flex flex-col items-center gap-2">
        <Image alt={model} src={image} width={350} height={350} />
        <div className="text-left w-full max-w-[350px]">
          <Typography
            variant="h1"
            fontWeight="bold"
            className="text-secondary-800 mb-2"
          >
            {model}
          </Typography>
          <Typography variant="h1" fontWeight="semibold" className="mb-2">
            &#8369;{pricePerMonth}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default ItemContainer;
