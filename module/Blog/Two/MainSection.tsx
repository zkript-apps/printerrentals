import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { Facebook, Tags, Twitter } from "lucide-react";
import Link from "next/link";

const tags = [
  {
    tag: "Benefits",
    url: "/benefits",
  },
  {
    tag: "Printer Rental",
    url: "/printer-rental",
  },
];

const MainSection = () => {
  return (
    <div>
      <Typography variant="h2">
        Printers are a necessity in both personal and business setting so it is
        important to know the benefits of renting a printer. Printers come in a
        wide variety of choices. Some printers are for personal or home use
        which is utilized to print simple documents such as to-do lists, travel
        itineraries, and shopping lists. On the other hand, there are types of
        printers used for commercial settings. These are larger printers used to
        print a bigger batch of documents.
        <br />
        <br />
        Whether you need a digital press or work group laser printer, renting a
        unit can offer a wide variety of benefits for your business. Renting
        instead of investing for your own unit acts as a great method of
        improving cash flow and provide a device to maintain a competitive
        advantage over your direct competitors in the industry.
      </Typography>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          1. Efficient equipment maintenance
        </Typography>
        <Typography variant="h2">
          Printer rental runs for a fixed contract which varies depending on
          your terms or needs. Since printers are known for breaking down, the
          cost of maintaining it is not cost-effective. Keep in mind that there
          are numerous printer leasing companies so choose the one trusted by
          many. In choosing a{" "}
          <Link href="/" target="_blank">
            <span className="underline text-primary-800 font-bold hover:text-secondary-600">
              printer leasing company
            </span>
          </Link>{" "}
          you should deal with, ensure that they can deliver or go beyond the
          standard to satisfy the needs of your business.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          2. Avoid end-of-life issues
        </Typography>
        <Typography variant="h2">
          Just like other electronic device and equipment, printers are not just
          prone to unexpected glitch and damage. Some models reach their
          end-of-life sooner than later and it can damage your company’s
          logistics. In addition, dealing with outdated printers is a pain since
          it can’t do all the functions you need in a fast-paced work
          environment.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          3. No more issues with broken printer disposal
        </Typography>
        <Typography variant="h2">
          Disposing of worn out and non-functioning devices such as computers
          and printers has been a source of debate for quite some time. This is
          due to the harm it may cause to our environment. That is no longer an
          issue these days because printer leasing companies need to comply with
          a plethora of environment-friendly disposal regulations set by local
          and international organizations. The ball is in the printer leasing
          company as they will set up the proper disposal of the worn out
          printers that can no longer be salvaged.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          4. Less is more when renting printers
        </Typography>
        <Typography variant="h2">
          Gone are the days when you have to purchase three different machines
          for various functions namely printing, copying, scanning, and
          sometimes faxing important documents. These days, you can have these
          three or more main functions in one machine.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          5. Cost-effective
        </Typography>
        <Typography variant="h2">
          Instead of purchasing a printer, you can use the budget to financially
          support other key functions in the business. Moreover, printer leasing
          is a good strategy applicable not just for small scale business but
          also for medium enterprise who needs to focus the budget in other
          aspects of the business.
          <br />
          <br />
          Without a doubt, renting a printer is easier than ever as it provides
          more benefits. If you’re still looking for a printer leasing company,{" "}
          <Link href="/" target="_blank">
            <span className="underline text-primary-800 font-bold hover:text-secondary-600">
              Printer Rentals PH
            </span>
          </Link>{" "}
          is one of the most trusted in the country with numerous clients and
          partners from different industries.
        </Typography>
      </div>
      <div className="flex items-center mt-[70px]">
        <Tags className="h-6 w-6 text-gray-600 mr-1.5" strokeWidth={1.5} />
        {tags.map((tag, index, arr) => (
          <div className="flex items-center mr-1" key={"tag-" + index}>
            <Link href={"/tag" + tag.url}>
              <Typography
                variant="h3"
                className="text-primary-800 hover:text-secondary-600"
              >
                {tag.tag}
              </Typography>
            </Link>
            {index != arr.length - 1 && ","}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-9 space-x-2">
        <Link
          href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprinterrentalsph.com%2F2019%2F07%2F03%2Fdifference-between-leasing-and-buying-printers%2F&t=Difference%20Between%20Leasing%20and%20Buying%20Printers%20%7C%20Printer%20Rentals%20PH"
          target="_blank"
        >
          <Button
            size="lg"
            className="py-1.5 px-5 rounded-lg bg-[#42599e] hover:bg-[#354982] shadow"
          >
            <Facebook className="h-7 w-7" fill="#fff" strokeWidth={0} />
          </Button>
        </Link>
        <Link
          href="https://x.com/intent/post?text=Difference%20Between%20Leasing%20and%20Buying%20Printers%20%7C%20Printer%20Rentals%20PH&url=https%3A%2F%2Fprinterrentalsph.com%2F2019%2F07%2F03%2Fdifference-between-leasing-and-buying-printers%2F&mx=2"
          target="_blank"
        >
          <Button
            size="lg"
            className="py-1.5 px-5 rounded-lg bg-[#55acee] hover:bg-[#4b97d1] shadow"
          >
            <Twitter className="h-7 w-7" fill="#fff" strokeWidth={0} />
          </Button>
        </Link>
        <Link
          href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
          target="_blank"
        >
          <Button
            size="lg"
            className="py-1.5 px-5 rounded-lg bg-[#db4437] hover:bg-[#bf3b30] shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="30"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffffff"
                d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainSection;
