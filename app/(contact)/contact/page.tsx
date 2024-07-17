import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import Contact from "@/module/Contact";
import Banner from "@/module/Contact/Banner";

const ContactPage = () => {
  return (
    <>
      <Banner />
      <WidthWrapper width="medium">
        <Contact />
      </WidthWrapper>
      <Cta />
    </>
  );
};

export default ContactPage;
