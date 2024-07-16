import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { Facebook, Tags, Twitter } from "lucide-react";
import Link from "next/link";

const tags = [
  {
    tag: "Buying",
    url: "/buying",
  },
  {
    tag: "Leasing",
    url: "/leasing",
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
        Printers, in businesses small or large, are essential equipment. While
        companies tend to be digital, there will always be a need for printers.
        A small business will go through a lot of printed material in the course
        of its lifetime. This is especially true for companies with a high
        capacity for printing and copying demands. There are tons of options to
        choose from, whether your company should use a laser printer or go with
        digital and advanced printers. The question that one should be asking,
        however, is if it is better actually to purchase your high capacity
        printers or to lease them.
        <br />
        <br />
        There are a lot of factors that give credence to both these choices, but
        it boils down to maintenance and logistics. When you buy your own{" "}
        <Link href="/" target="_blank">
          <span className="underline text-primary-800 font-bold hover:text-secondary-600">
            printing system
          </span>
        </Link>
        , you will most probably be also getting the responsibility of making
        sure that it works as intended. On the other hand, when you lease the
        equipment, you will be getting the service, but at the same time get rid
        of the hassle of maintenance.
      </Typography>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          1. Managed print service
        </Typography>
        <Typography variant="h2">
          More and more businesses are recognizing the advantage of getting the
          service and letting others do the dirty work of maintenance. Because
          of this popularity, the idea of leasing a printer or printers has
          grown into something that the office industry refers to as{" "}
          <Link href="/" target="_blank">
            <span className="underline text-primary-800 font-bold hover:text-secondary-600">
              managed print services
            </span>
          </Link>
          . These are the words coined to the approach of an all in one package
          involving all the processes involved in printing. Processes required
          would mean logistics, primarily maintenance, paper costs, and ink,
          among all the other costs involved in one convenient package.
          <br />
          <br />
          This holistic approach would translate into enormous savings in the
          long run. This extends to personnel as this all-in-one package can be
          responsible for preventive maintenance, online and onsite support, and
          the all-important usage tracking. What this means is that for
          businesses with limited funding, they can make do with even just the
          most essential IT infrastructure as the printing leasing service is
          practically going to run itself.
        </Typography>
      </div>
      <div className="mt-12">
        <Typography fontWeight="bold" className="text-2xl md:text-[28px] mb-7">
          2. The Main Differences
        </Typography>
        <Typography variant="h2">
          The most glaring and obvious difference would be the cost, and to be
          specific, the upfront cost. For a small startup business, this could
          mean the difference between being a flop or a success. The average
          costs involved in purchasing and maintaining your printer system could
          effectively cripple your capital instead of being diverted into front
          line income generating activities. A high tech and high capacity laser
          printer can cost anywhere from thousands and upwards into tens of
          thousands of dollars just to set up and purchase.
          <br />
          <br />
          Another delineation would be that when your company leases its
          printing logistics and services, your office will undoubtedly be
          future proofed of any technological advances in printing, such as
          newer types of inkjets or laser printing heads that can save your
          company money in the long run. An example of a breakthrough would be
          those printers that have wireless technology and networking
          capabilities embedded in themselves.
          <br />
          <br />
          Convenience is another desirable difference between leasing and
          buying, as most leasing services use the holistic approach of managed
          print services. These companies will provide all preventive
          maintenance and logistics for all your printing needs. As a business
          owner, this will free up valuable time, which can be channeled into
          other, more focused activities for investing in your business.
          <br />
          <br />
          Whether your company is just starting up or well into its operations,{" "}
          <Link href="/" target="_blank">
            <span className="underline text-primary-800 font-bold hover:text-secondary-600">
              leasing printers
            </span>
          </Link>{" "}
          is a viable option that has tremendous benefits to bring to the table
          in the day to day operations of your business.
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
