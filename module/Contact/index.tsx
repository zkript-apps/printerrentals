"use client";
import ContactForm from "./ContactForm";
import MoreInformation from "./MoreInformation";

const Contact = () => {
  return (
    <div className="mx-4 md:mx-10 2xl:mx-auto mt-10 md:mt-14 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactForm />
        <MoreInformation />
      </div>
    </div>
  );
};

export default Contact;
