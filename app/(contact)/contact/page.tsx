import { APP_NAME } from "@/common/constants";
import Contact from "@/module/Contact";
import ContactUsSection from "@/module/Contact/ContactUsSection";
import GetInTouchWithUsSection from "@/module/Contact/GetInTouchWithUsSection";
import MapSection from "@/module/Contact/MapSection";
import MoreInformationSection from "@/module/Contact/MoreInformationSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
};

const ContactPage = () => {
  return (
    <div>
     <Contact/>
    </div>
  );
};

export default ContactPage;
