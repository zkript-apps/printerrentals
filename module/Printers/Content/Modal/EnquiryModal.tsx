import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { useForm } from "react-hook-form";

type T_Props = {
  isOpen: boolean;
  setClose: () => void;
};

type T_Enquiry = {
  name: string;
  email: string;
  subject: string;
  enquiry: string;
};

const EnquiryModal = ({ isOpen, setClose }: T_Props) => {
  const { register, handleSubmit } = useForm<T_Enquiry>();

  const onSubmit = (data: T_Enquiry) => console.log(data);

  return (
    <Dialog open={isOpen} onClose={setClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="flex items-center justify-between">
                <Typography className="text-[22px]" fontWeight="bold">
                  Product Enquiry
                </Typography>
                <button onClick={setClose}>
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 sm:mt-5">
                <Typography
                  className="leading-6"
                  variant="h5"
                  fontWeight="bold"
                >
                  DCP J100
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="grid grid-cols-7 md:grid-cols-6 gap-x-2">
                    <div className="col-span-2 md:col-span-1 text-right">
                      <Typography variant="h5" className="mt-2">
                        *Name:
                      </Typography>
                      <Typography variant="h5" className="mt-7">
                        *Email:
                      </Typography>
                      <Typography variant="h5" className="mt-7">
                        Subject:
                      </Typography>
                      <Typography variant="h5" className="mt-7">
                        *Enquiry:
                      </Typography>
                    </div>
                    <div className="col-span-5 md:col-span-5">
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        required
                      />
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        className="block w-full rounded-md border-0 px-2 py-1.5 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        required
                      />
                      <input
                        {...register("subject")}
                        type="text"
                        className="block w-full rounded-md border-0 px-2 py-1.5 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6"
                      />
                      <textarea
                        {...register("enquiry", { required: true })}
                        rows={4}
                        className="block w-full rounded-md border-0 px-2 py-1.5 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-5 space-x-5">
                    <Button
                      type="submit"
                      className="text-[15px] py-2 px-6 bg-secondary-800 hover:bg-secondary-900 text-white font-bold"
                    >
                      Send
                    </Button>
                    <Button
                      type="button"
                      className="text-[15px] py-2 px-6 bg-neutral-700 hover:bg-neutral-600 text-white font-bold"
                      onClick={setClose}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EnquiryModal;
