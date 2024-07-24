import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import Printers from "@/module/Printers";
import Banner from "@/module/Printers/Banner";

const PrintersPage = () => {
  return (
    <>
      <Banner />
      <WidthWrapper width="medium">
        <Printers />
      </WidthWrapper>
      <Cta />
    </>
  );
};

export default PrintersPage;
