import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { Mail, Pencil, Phone, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";

type T_Contact = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<T_Contact>();

  const onSubmit = (data: T_Contact) => console.log(data);

  return (
    <div>
      <Typography variant="h1" fontWeight="bold">
        Get In Touch With Us
      </Typography>
      <div className="border-yellow-500 w-[80px] pt-2 rounded-sm border-t-4 mt-1"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UserRound aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:border-none focus:outline-none sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email *"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:border-none focus:outline-none sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Phone aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("phoneNumber", { required: true })}
            type="text"
            placeholder="Phone Number *"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 mt-2.5 pl-3">
            <Pencil aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
            rows={5}
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-xl sm:leading-6"
            required
          />
        </div>
        <Button
          size="lg"
          className="group relative h-12 w-full md:w-48 overflow-hidden rounded-lg bg-secondary-800 shadow md:mt-24"
        >
          <div className="absolute inset-0 bg-secondary-900 transition-all duration-[250ms] ease-out opacity-0 group-hover:opacity-100"></div>
          <span className="relative text-white text-md">Send Message</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
