import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { Facebook, Tags, Twitter } from "lucide-react";
import Link from "next/link";

const tags = [
  {
    tag: "Cost",
    url: "/cost",
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
        How much does it cost to rent a printer? We can help you with your
        question. Avoiding hassle is one of the major reasons why companies rent
        printers. So,{" "}
        <Link href="/" target="_blank">
          <span className="underline text-primary-800 font-bold hover:text-secondary-600">
            Printer Rentals PH
          </span>
        </Link>{" "}
        choose to have a business that offers a very good services for renting a
        printer that’s why a lot of our clients are happy with our service.
      </Typography>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          1. The Reason
        </Typography>
        <Typography variant="h2">
          Printer rentals is the better way to reduce your business expenses for
          this 4 major reason.
        </Typography>
        <ul className="list-disc ml-10 md:ml-20 mt-6 space-y-2">
          <li>
            <Typography variant="h2">
              If your business only use printer in certain period of time.
            </Typography>
          </li>
          <li>
            <Typography variant="h2">
              When your business is heavy user of printer.
            </Typography>
          </li>
          <li>
            <Typography variant="h2">
              Looking for the best quality printer.
            </Typography>
          </li>
          <li>
            <Typography variant="h2">
              Does not have any I.T personnel.
            </Typography>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          2. Determine your Business
        </Typography>
        <Typography variant="h2">
          In renting printer, you will need to determine how long you will need
          it because some of printing rental company may offer the best deal for
          a week or for a month or for only a day, that’s why it is important to
          determine the actual printer needs of your business.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          3. Prices may Vary
        </Typography>
        <Typography variant="h2">
          Cost of renting a printer in the Philippines may vary depending on the
          brand and type of printer that you need, but you can get a faster and
          easy price quotation on us by clicking here, you will get a response
          to us as soon as possible. Our services include unlimited ink supply,
          on-site maintenance, free bond paper and if you rent 5 printers to us,
          you get additional 1 for FREE.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          4. Cost to rent a Printer
        </Typography>
        <Typography variant="h2">
          Usually, renting a printer in the Philippines can cost P2,000.00 –
          P10,000.00 per month and all of companies offer different services.
          The leading choice of printer brand of the companies in the
          Philippines are EPSON and BROTHER because its durability and
          reliability and yes, we offer these two leading brands and you can
          check our printer lists{" "}
          <Link href="/printers" target="_blank">
            <span className="underline text-primary-800 font-bold hover:text-secondary-600">
              here
            </span>
          </Link>
          .
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
