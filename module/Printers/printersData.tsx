import Description from "./Content/Description";
import Title from "./Content/Title";
import j100 from "@/common/assets/brother-j100.jpeg";
import j105 from "@/common/assets/brother-j105-600x600.jpeg";
import j200 from "@/common/assets/brother-j200-600x600.jpeg";
import j2330 from "@/common/assets/brother-j2330-600x600.jpeg";
import j2730 from "@/common/assets/brother-j2730-600x600.jpeg";
import j3530 from "@/common/assets/brother-j3530.jpeg";
import j3930 from "@/common/assets/brother-j3930-600x600.jpeg";
import l2365 from "@/common/assets/HLL2365DW-350x350.jpeg";
import l2540 from "@/common/assets/DCPL2540DW-600x600.jpeg";
import l2740 from "@/common/assets/DCPL2540DW-600x600.jpeg";
import l120 from "@/common/assets/L120-150x150.png";
import l1300 from "@/common/assets/L1300-150x150.png";
import l3110 from "@/common/assets/L3110-150x150.png";
import l3150 from "@/common/assets/L3150-150x150.png";
import l5190 from "@/common/assets/L5190-150x150.png";
import l6170 from "@/common/assets/L6170-150x150.png";
import wf7711 from "@/common/assets/WF711-150x150.png";
import l1455 from "@/common/assets/L1455-150x150.png";
import DescriptionList from "./Content/DescriptionList";
import List from "./Content/List";
import FeaturesList from "./Content/FeaturesList";
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";

export const printers = [
  {
    id: "dcp-j100",
    model: "DCP J100",
    image: j100,
    pricePerMonth: "2,500.00 / Month",
    description:
      "The Brother DCP J100 stands up to the competition due to its affordable price and reliable features including a print resolution of 1200×2400 DPI, USB 2.0 Hi-Speed connectivity, and Inkjet printing technology. Read on to learn more about the Brother DCP J100.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Brother DCP J100: A fast and accurate multifunction printer"
            className="mb-7"
          />
          <Description
            text="Brother is one of the household names in the printing world that are trusted by Filipinos. They are popular for their line ofprinters, with the DCP J100 being one of the most sought-after models. The Brother DCP J100 delivers an impressive performance when it comes to printing, scanning, and copying, making it ideal for home and office use. Here is a rundown of its specs and features."
            className="mb-12"
          />
          <Title variant="h1" text="Polycarbonate Body" className="mb-7" />
          <Description
            text="With a black polycarbonate body and matte finish, the Brother DCP J100 sports a sophisticated exterior. Much like high-end printers, the scanning bed is situated on top of the machine. Down the lid is a set of buttons for the operation of the machine. These include Enlarge/Reduce, Copy Quality, Number of Copies, Copy Options, Scan, Stop/Exit, Color, and much more. Each of these has specific functions which are found in the manual."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Good scanning performance"
            className="mb-7"
          />
          <Description
            text="In the scanning department, the Brother DCP J100 will allow you to scan documents and save them in JPEG, PNG, or PDF format. You can also crop your scanned files manually or enable the software to do the cropping."
            className="mb-12"
          />
          <Title variant="h1" text="Easy-to-use" className="mb-7" />
          <Description
            text="Photocopying is so convenient with the Brother DCP J100, you can easily make a quick copy of your ID by simply selecting the n-in-1 or ID copy functions which prompt you to scan each side, then the printer would automatically place the copies on a sheet of paper. You won’t need to place your ID manually on the scanner or place the paper again to print the other side."
            className="mb-12"
          />
          <Title variant="h1" text="Impressive performance" className="mb-7" />
          <Description text="Much like top-quality inkjet printers in the market, the Brother DCP J100 will be enough for day-to-day printing, regardless of the type of document. When it comes to printing speed, it delivers an impressive speed of 11ppm for monochrome and 6 ppm for color prints. This saves you time when you have a large volume of printing tasks. On top of that, the Brother DCP J100 has InkBenefit Cartridges with a super high yield, which conveniently reduce the frequency of ink purchases. These cartridges also let you replace only the colors you need, hence reducing the wastage of ink." />
          <br />
          <Description text="As for print quality, you can expect the Brother DCP J100 to produce high-quality and consistent results with sharp and crisp texts and visuals sporting a resolution of 1200×600 dpi. In addition, the printer has a Lamination technology that laminates the print head with a stainless steel, protecting the device from corrosion." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Print up to Legal size, Scan/Copy up to A4 size",
            "Prints up to 11/6 ppm based on ISO",
            "Has 1 line LCD screen",
            "Can print up to 100 sheet tray / uses high yield inks",
          ]}
        />
      );
    },
    related: ["mfc-j3530dw", "mfc-j2330dw", "mfc-j2730dw"],
  },
  {
    id: "dcp-j105w",
    model: "DCP J105w",
    image: j105,
    pricePerMonth: "3,000.00 / Month",
    description:
      "Laminated Piezo Print Head provides reliability and optimises undisrupted high-volume printing. Save more, do more with low-cost super high yield InkBenefit cartridges and wireless networking capability.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            className="mb-12"
            text="Brother’s Laminated Piezo Print Head minimises print head damage and enhances the durability of the machine, allowing users to save on repairs. Furthermore, with low-cost super high yield InkBenefit cartridges, the inkjet Multi-Function Centre meets the demands of high print-volume businesses for low running costs."
          />
          <Title className="mb-7" variant="h1" text="Save on Repairs" />
          <Description
            className="mb-12"
            text="Lamination Technology & Piezo Technology enhanced durability and minimises print head damage, helping you save on repair and replacement costs."
          />
          <Title className="mb-7" variant="h1" text="Low Running Costs" />
          <Description
            className="mb-12"
            text="Enjoy low ink costs with affordable 2,400^ super high page-yield InkBenefit cartridges. Reduce ink wastage with an individual ink cartridge system that allows you to replace only the colours you need. Plus, easily produce 2-up and 4-up on a single sheet. This saves paper when viewing drafts or layouts."
          />
          <Title className="mb-7" variant="h1" text="Improve Productivity" />
          <Description
            className="mb-12"
            text="Featuring high print speeds of 11/6ppm* , time is saved when there are large volume printing tasks. Users can utilise their time more efficiently instead of waiting for their printouts. Furthermore, with paper input of up to 100 sheets, users avoid having to refill paper tray too frequently."
          />
          <Title className="mb-7" variant="h1" text="Save Time" />
          <Description
            className="mb-12"
            text="Enjoy convenience of less-frequent ink purchases with super high-yield InkBenefit cartridges. Plus, save valuable time as you can still print in black even if colour cartridges run out."
          />
          <Title
            className="mb-7"
            variant="h1"
            text="Simplify the Way You Work"
          />
          <Description text="With the free iPrint&Scan app, you can now print directly from your iPhone, iPod Touch or iPad. Plus, you can scan documents from your Multi-Function Centre straight to your Apple gadgets." />
          <br />
          <Description
            className="mb-12"
            text="In addition, save resources and share your multi-function centre across your wireless network."
          />
          <Title className="mb-7" variant="h1" text="Professional Quality" />
          <Description text="Our colour inkjet series deliver consistent and high quality results with sharp images and crisp text. Our Multi-Function Centres offer unique colour enhancement designed to optimize your color prints with true to life colours. Brother black pigment ink will provide you with sharp text printing on standard paper. It is water resistant so it won’t smudge. You get consistently sharp text every time." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Print up to Legal size, Scan/Copy up to A4 size",
            "Prints up to 11/6 ppm based on ISO",
            "Has 1 line LCD screen",
            "Wireless network/ Mobile print capabilities",
            "Can print up to 100 sheet tray / uses high yield inks",
          ]}
        />
      );
    },
    related: ["mfc-j200", "mfc-j2330dw", "mfc-j3930dw"],
  },
  {
    id: "mfc-j200",
    model: "MFC J200",
    image: j200,
    pricePerMonth: "3,500.00 / Month",
    description:
      "Laminated Piezo Print Head provides reliability and optimises undisrupted high-volume printing. Save with low-cost super high yield InkBenefit cartridges, fax, automatic document feeder and wireless networking capability.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Reliability with high print volume. When your company’s reputation is built on reliability, you need an All-in-One that is as dependable as you are. The Laminated Piezo Print Head provides reliability and optimises undisrupted high-volume printing. In addition, save more with low-cost, super high yield cartridges." />
          <br />
          <Description text="Featuring high print speeds of up to 27ppm mono and 10ppm colour, save time when there are large volume printing tasks. Furthermore, with paper input of up to 100 sheets, users avoid having to refill paper tray too frequently." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/PC-Fax up to legal size",
            "Prints up to 11/6 ppm mono/colored based on ISO",
            "Wireless LAN and Mobile print capabilities",
            "LCD screen",
            "Scan, Copy and Fax multiple pages withAutomatic Document Feeder",
          ]}
        />
      );
    },
    related: ["dcp-j100", "dcp-j105w", "mfc-j2330dw"],
  },
  {
    id: "mfc-j2330dw",
    model: "MFC J2330DW",
    image: j2330,
    pricePerMonth: "4,000.00 / Month",
    description:
      "The MFC-J2330DW Business Smart Inkjet All-in-One prints up to A3 and copies, scans and faxes up to A4.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            className="mb-9"
            text="Print, Scan, Copy,  and Fax with this brand new all-in-one printer for the best of performance in the office. With the wireless feature, now you dont need to worry about all those hassle that comes with LAN connection."
          />
          <Title className="mb-5" variant="h3" text="Key Features" />
          <List
            lists={[
              "Engineered for business performance. Durable build quality and performance.",
              "Super high-yield. 3000 pages black and 1500 pages colour replacement ink catridges offer lower printing costs.",
              "New pigment-based ink formula bonds with the document surface which will deliver you sharp black texts and high impact colour documents.",
              "Print up to A3 size.",
              "Lessen waiting time for first print-outs. Approximately 6.0 and 6.5 seconds for black and white and colour printing respectively.",
              "Save paper with automatic 2-sided printing.",
              "A4 scan glass and automatic document feeder which can hold up to 50 sheets at a time.",
              "Stock up to 250 sheets of papers, which means, fewer rounds to refill.",
              "1 sheer manual feedslot for envelopes or speciality papers",
              "Wi-Fi Direct. Print and scan from almost anywhere without the need of a router.",
              "Scan to popular cloud services directly from the 2.7” Touchscreen display.",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono/20 ipm colored",
            "Auto 2 sided print and copy up to A4",
            "Print up to A3 size; Copy/Scan up to Legal size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray",
          ]}
        />
      );
    },
    related: ["mfc-j2730dw", "mfc-j200", "mfc-j3930dw"],
  },
  {
    id: "mfc-j2730dw",
    model: "MFC J2730DW",
    image: j2730,
    pricePerMonth: "5,000.00 / Month",
    description:
      "The MFC-J2730DW Business Smart Inkjet All-in-One prints up to A3 and copies, scans and faxes up to A4.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Leave behind cramped spreadsheets, indistinct photos and overcrowded documents." />
          <br />
          <Description text="With A3 printing capabilities, you can expand, showcase and present your work without having to lose any details. Whether you’re printing large format documents or a small image, choose from a range of paper sizes to suit your needs." />
          <br />
          <Description text="With an impressive First Print Out Time (FPOT) of 6 seconds, 22ipm for black and 20ipm for colour, the new inkjet series ensures that you spend less time waiting for prints, and more time managing your business." />
          <br />
          <Description text="Keep printing costs low with Brother’s super high-yield InkBenefit cartridges. The InkBenefit cartridge yields up to 3,000** pages for black and 1,500** pages for colour, ensuring that you pay less, for more." />
          <br />
          <Description text="Your charts, figures and presentation decks will never be dull again. Our new fast-drying pigment-based ink delivers superior print quality with high black density and true-to-life colours. These detailed, high-quality prints are water and fade resistant, ensuring that your documents withstand the test of time." />
          <br />
          <Description text="Navigate print jobs and printer functions effortlessly with the 3.7″ colour LCDtouchscreen. The built-in Ethernet and wireless capabilities also allow you to connect all your devices to one machine for extra convenience. Printing has never been this easy." />
          <br />
          <Description text="Access innovative cloud-based applications directly from your Brother machine." />
          <br />
          <Description text="With the free iPrint&Scan app, you can now print directly from your iPhone, iPod Touch or iPad. Plus, you can scan documents from your MFC straight to your Apple gadgets." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono/20 ipm colored",
            "Auto 2 sided print and copy up to A4",
            "Print up to A3 size; Copy/Scan up to Legal size",
            "Wireless LAN and Mobile print capabilities",
            "LCD screen",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray; 250 sheets on lower tray; 100 sheets on MP tray",
          ]}
        />
      );
    },
    related: ["dcp-j100", "mfc-j2330dw", "mfc-j200"],
  },
  {
    id: "mfc-j3530dw",
    model: "MFC J3530DW",
    image: j3530,
    pricePerMonth: "6,000.00 / Month",
    description:
      "The MFC-J3530DW Business Smart Inkjet All-in-One prints, copies, scans and faxes in full A3.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Brother MFC-J3530DW Multifunction Inkjet Printer" />
          <br />
          <List
            lists={[
              "TECHNOLOGY Inkjet",
              "MEMORY 128MB",
              "DISPLAY 2.7″ Touchscreen Colour LCD with Touch Sensitive Controls",
              "FUNCTION Up to A3 Print, Print, A3 Copy, Wired Networking , Fax, PC Fax, Wireless Networking, A3 Colour Scan, Direct Photo Print, Google Cloud Print, AirPrint, Automatic duplex (2-sided) print, WiFi Direct, Web Connection, Brother Apps – Outline&Scan/ Outline&Copy/ NoteScan",
              "INTERFACE USB 2.0 Hi-Speed , Ethernet 10/100 Base-TX, Wireless LAN IEEE802.11b/g/n",
              "PRINT SPEED Up to 35 (Monochrome) / 27 (Colour) ppm (Based on Fast Mode),Up to 22 (Monochrome) / 20 (Colour) ppm (Based on ISO/IEC 24734*)",
              "PRINT RESOLUTION Up to 1,200 x 4,800 dpi (Horizontal x Vertical)",
              "DUPLEX (2-SIDED) PRINT A3 Automatic Double-sided printing",
              "PAPER HANDLING SIZES A4, LTR, EXE, B5, A3, LGR, B4, LGL, Folio, A5, B6,A6, Photo(10x15cm/4×6″), Indexcard(13x20cm/5×8″), Photo-L(9x13cm/3.5×5″), Photo-2L(13x18cm/5×7″), C5, Com-10, DL Envelope, Monarch, Mexico Legal, India Legal (Standard Tray)",
            ]}
          />
          <br />
          <Description text="COPY" />
          <br />
          <List
            lists={[
              "MULTICOPY (STACK) Up to 99 copies",
              "COPY RESOLUTION Print up to 1200 x 2400 dpi",
              "COPY SPEED Up to 12 (Monochrome) / 9 (Colour) cpm (Based on ISO/IEC 24735)",
            ]}
          />
          <br />
          <Description text="FAX" />
          <br />
          <List
            lists={[
              "MODEM SPEED 33.6 kbps Super G3",
              "TRANSMISSION SPEED Approximately 3 seconds (ITU-T Test Chart #1, Std resolution, JBIG)",
            ]}
          />
          <br />
          <Description text="SCAN" />
          <br />
          <List
            lists={[
              "SCANNING CAPABILITY Colour & Monochrome",
              "OPTICAL SCANNING RESOLUTION Up to 1,200 x 2,400 dpi",
              "INTERPOLATED SCANNING RESOLUTION Up to 19,200 x 19,200 dpi",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono and 20 ipm colored",
            "Auto 2 sided Print/Scan/Copy up to A3 size",
            "Print/Scan/Copy up to A3 size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray",
          ]}
        />
      );
    },
    related: ["mfc-j3930dw", "mfc-j2730dw", "dcp-j100"],
  },
  {
    id: "mfc-j3930dw",
    model: "MFC J3930DW",
    image: j3930,
    pricePerMonth: "7,000.00 / Month",
    description:
      "The MFC-J3930DW Business Smart Inkjet All-in-One prints, copies, scans and faxes in full A3.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            className="mb-9"
            text="Brother’s MFCJ3930DW is a powerful business inkjet all-in-one featuring enhanced paper handling that makes it a valuable part of any working group."
          />
          <Title className="mb-5" variant="h3" text="Key Features" />
          <List
            lists={[
              "Full A3 high print volume printing, copying, scanning and faxing in one innovative machine.",
              "Moreover, users reduce paper and ink wastage with Brother’s duplex (two-sided) printing. Plus, easily produce 2-up and 4-up on a single sheet. This saves paper when viewing drafts or layouts.",
              "Beat the deadlines with the fast print speed in its class of up to 22/20ppm*.",
              "The A3 Automatic Document Feeder (ADF) allows unattended scanning, copying and faxing of multi-page documents quickly and easily.",
              "The PC Fax receiving function boasts a junk fax filter that eliminates the printing of unnecessary faxes by scanning documents directly to your computer instead of printing them out indiscruminately, thereby cutting down on paper and ink wastage.",
              "The direct print feature enables users to print files such as JPEG without even using computer.",
              "Print directly from a USB flash memory drive by simply connecting them to the MFC.",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono and 20 ipm colored",
            "Auto 2 sided Print/Scan/Copy up to A3 size",
            "Print/Scan/Copy up to A3 size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray; 250 sheets on lower tray; 100 sheets on MP tray",
          ]}
        />
      );
    },
    related: ["dcp-j105w", "mfc-j2330dw", "mfc-j2730dw"],
  },
  {
    id: "hl-l2365dw",
    model: "HL L2365DW",
    image: l2365,
    pricePerMonth: "3,000.00 / Month",
    description:
      "Boost your productivity with Brother’s HL-L2365DW monochrome laser printer. With high-speed printing of up to 30 pages per minute (ppm) and multiple valuable features, you will have a printing experience like no other. Plus, you will get a 2,600-page high yield toner that comes with your printer.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Description text="A professional mono laser printer for the small or home office with both wired and wireless network compatibility." />
          <br />
          <Description text="Speed up to 30ppm, 250 sheet paper tray and double-sided printing as standard. Optional cost-effective, high-yield toner cartridges available." />
          <br />
          <Description text="The HL-L2365DW combines professional mono laser print with versatile connectivity options, perfect for Small Offices." />
          <br />
          <Description text="Wired and wireless network-ready, prepare to print and scan from anywhere using the Brother iPrint&Scan app, Google Cloud Print, Apple AirPrint and Wi-Fi Direct. Wherever you are in the office, professional printing is only a press of a button away." />
          <br />
          <Description text="With speeds of up to 30ppm and a 250 sheet paper tray you can focus on the tasks that matter, safe in the knowledge that your print jobs will be professionally delivered quickly and efficiently, without the need to refill the paper tray in between jobs." />
          <br />
          <Description text="Added efficiency can be found in the inbox 1200 page toner, double-sided printing feature and optional cost-effective, high-yield toner cartridges to both reduce waste and running costs." />
        </>
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "Single function (print only)",
              "Print with 30ppm high speed",
              "Print up to Legal size",
              "Automatic 2 sided print",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["mfc-l2740dw", "dcp-l2540dw"],
  },
  {
    id: "dcp-l2540dw",
    model: "DCP L2540DW",
    image: l2540,
    pricePerMonth: "3,500.00 / Month",
    description:
      "Laser Multi-Function Copier with Wireless Networking and Duplex Printing.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <Description text="The Brother DCP-L2540DW is a reliable, affordable monochrome laser multi-function copier with an up to 35-page automatic document feeder for home or small office use. This desk-friendly, compact copier has an up to 250-sheet capacity tray, connects with ease via wireless networking or Ethernet, and prints and copies at up to 30ppm. Print from compatible mobile devices over your wireless network‡;. Scan documents to a variety of destinations‡;. Automatic duplex printing helps save paper. 1-year limited warranty plus free phone support for life of your product." />
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "3-in-1 multi-function monochrome",
              "Print, Scan, & Copy up to Legal Size",
              "Print with 30ppm high speed",
              "Automatic 2 sided print/copy/scan",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["hl-l2365dw", "mfc-l2740dw"],
  },
  {
    id: "mfc-l2740dw",
    model: "MFC L2740DW",
    image: l2740,
    pricePerMonth: "4,500.00 / Month",
    description:
      "Compact Laser All-in-One with Wireless Networking and Advanced Duplex.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <Description text="The Brother MFC-L2740DW is a reliable, affordable monochrome laser all-in-one with an up to 35-page automatic document feeder for home or small office use. This desk-friendly, compact all-in-one has an up to 250-sheet capacity tray, connects with ease via wireless networking or Ethernet, and prints and copies at up to 32ppm‡;. Automatic duplex printing, plus single-pass duplex scanning and copying. 2.7″ color TouchScreen Display for intuitive menu navigation. Print from compatible mobile devices over your wireless network‡;. Scan documents to a variety of destinations, including popular cloud services‡;. High-speed faxing. 1-year limited warranty plus free phone support for life of your product." />
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "5-in-1 multi-function monochrome",
              "Print, Scan, Copy, Fax, & Internet fax up to Legal Size",
              "Print with 30ppm high speed",
              "Automatic 2 sided print/copy/scan",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["dcp-l2540dw", "hl-l2365dw"],
  },
  {
    id: "epson-l120-ink-tank-printer",
    model: "Epson L120 Ink Tank Printer",
    image: l120,
    pricePerMonth: "1,500.00",
    description:
      "The Epson L120 ink tank system printer brings speedy performance with low running costs to all your personal and work projects.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Savings and Page Yield"
            className="mb-7"
          />
          <Description text="Epson’s proven original ink tank system delivers reliable printing, using Epson genuine inks that let you enjoy ultra high page yields at very low running costs. Each purchase of the Epson L120 comes bundled with a set of 40ml CMYK ink bottles, with additional 70ml ink bottles available at just US$5.50 per bottle." />
          <br />
          <Description
            text="*Based on ISO/IEC 24712 patterns with Epson’s own methodology and aftermarket 70ml inks."
            className="mb-12"
          />
          <Title variant="h1" text="Impressive Print Speed" className="mb-7" />
          <Description
            text="Constantly improving to meet the printing needs of small business owners, the Epson L120 features faster printing speeds of up to 8.5 ipm for black-and-white, and 4.5 ipm for colour to deliver better work productivity."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description
            text="Enjoy warranty coverage of 2 years or 20,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Hassle-free and Easy to Use"
            className="mb-7"
          />
          <Description
            text="The L120 allows for easy, mess-free refills. It is equipped with special tubes inside to ensure smooth and reliable ink flow at all times."
            className="mb-12"
          />
          <Title variant="h1" text="Space-saving Design" className="mb-7" />
          <Description
            text="Working with the limited office space of SOHO businesses, the L120 is compactly designed to take up lesser space than previous models. Its smaller footprint means you can now fit them comfortably anywhere in your home or office."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-Series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "High-yield ink bottles",
            "Print speed up to 8.5ipm for black-and-white and 4.5ipm for color",
            "Compact Size",
          ]}
        />
      );
    },
    related: [
      "epson-ecotank-l3150-wi-fi-all-in-one-ink-tank-printer",
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
    ],
  },
  {
    id: "epson-l1300-a3-ink-tank-printer",
    model: "Epson L1300 A3 Ink Tank Printer",
    image: l1300,
    pricePerMonth: "5,000.00",
    description:
      "The Epson L1300 is the worlds first 4-colour, A3+ original ink tank system printer, bringing ultra affordability to high quality A3 document printing in a big way.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Savings and Page Yield"
            className="mb-7"
          />
          <Description text="High capacity integrated ink tanks and highly affordable genuine ink bottles at just US$5.50 each add up to greater savings. With a bundled starter kit of 5 bottles of Epson Ink, the L1300 yields up to 7,100 pages (black)*." />
          <br />
          <Description
            text="*Quoted yields are extrapolated based on Epson original methodology from the print simulation of Test Patterns provided in ISO/IEC 24712. Quoted yields are NOT based on ISO/IEC 24711. Actual yields may vary depending on manner of usage and print pattern. 7100 pages is based on yield from two black ink bottles."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Designed for High Productivity"
            className="mb-7"
          />
          <Description
            text="The L1300 features an advanced printhead to achieve fast print speeds of up to 15ipm (black)."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Super Reliability and Print Quality"
            className="mb-7"
          />
          <Description
            text="Designed for continuous printing performance, Epson’s renowned Micro Piezo™ printhead is not only highly reliable in operation, it also delivers an astoundingly high resolution of 5760dpi. When paired with genuine Epson formulated inks, the L1300 delivers exceptionally high quality prints for all your business and creative needs."
            className="mb-12"
          />
          <Title variant="h1" text="Media Flexibility" className="mb-7" />
          <Description
            text="The L1300 comes with a rear-feed tray that accepts a wide variety of printing media, including thick paper, photo paper, envelopes, labels and more that allows you to accomplish all manner of printing jobs with ease."
            className="mb-12"
          />
          <Title variant="h1" text="Space-saving Design" className="mb-7" />
          <Description
            text="Working with the limited office space of SOHO businesses, the L120 is compactly designed to take up lesser space than previous models. Its smaller footprint means you can now fit them comfortably anywhere in your home or office."
            className="mb-12"
          />
          <Title variant="h1" text="Hassle-free Operation." className="mb-7" />
          <Description
            text="Epson’s original ink tank system is designed for smooth, no-mess operation in corporate and SOHO environments."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description
            text="Epson genuine ink bottles are individually sealed to ensure the purity of its contents and formulated to deliver outstanding high-volume print quality with L-Series printers. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description
            text="Epson genuine ink bottles are individually sealed to ensure the purity of its contents and formulated to deliver outstanding high-volume print quality with L-Series printers. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="1-Year Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of one year or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from maintenance worries." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "High-yield ink bottles",
            "Print speed up to 15ipm",
            "Print resolution up to 5760 x 1440 dpi",
          ]}
        />
      );
    },
    related: [
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
      "epson-l5190-wi-fi-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-ecotank-l3110-all-in-one-ink-tank-printer",
    model: "Epson EcoTank L3110 All-in-One Ink Tank Printer",
    image: l3110,
    pricePerMonth: "2,000.00",
    description:
      "Save more with Epson’s economical and multifunctional printing solutions for business—the EcoTank L3110—built to bring down costs, and bring up productivity. The integrated ink tank enables spill-free, error-free refilling with individual bottles that have designated nozzles. Other features include borderless 4R printing and an ultra-high yield of 7,500 coloured and 4,500 black-and-white pages.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Space-saving Design, Spill-free Refilling"
            className="mb-7"
          />
          <Description
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L3110, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L3110 prints at a high printing resolution of 5760 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L3110 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-l120-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-ecotank-l3150-wi-fi-all-in-one-ink-tank-printer",
    model: "Epson EcoTank L3150 Wi-Fi All-in-One Ink Tank Printer",
    image: l3150,
    pricePerMonth: "2,500.00",
    description:
      "Save more with Epson’s economical and multifunctional printing solutions for business—the EcoTank L3150—built to bring down costs, and bring up productivity. The integrated ink tank enables spill-free, error-free refilling with individual bottles that have designated nozzles. Other features include borderless 4R printing and an ultra-high yield of 7,500 coloured and 4,500 black-and-white pages. The EcoTank L3150 also delivers the convenience of wireless connectivity, allowing direct printing from smart devices.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Space-saving Design, Spill-free Refilling"
            className="mb-7"
          />
          <Description
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L3150, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 4 devices to the printer without a router."
            className="mb-12"
          />
          <Title variant="h1" text="Epson Connect Enabled" className="mb-7" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <Description text="Epson iPrint" className="underline mb-1" />
          <Description
            text="Print from and scan directly to your smart device or online cloud storage services."
            className="mb-6"
          />
          <Description text="Epson Email Print" className="underline mb-1" />
          <Description
            text="Print to any Email Print-enabled Epson printer from any device or PC with email access."
            className="mb-6"
          />
          <Description text="Remote Print Driver" className="underline mb-1" />
          <Description
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <Description text="Google Cloud Print™" className="underline mb-1" />
          <Description
            text="Print directly from an Android™ smartphone, tablet or PC using your Google account."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L3150 prints at a high printing resolution of 5760 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L3150 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Epson Connect (Epson iPrint, Epson Email Print and Remote Print Driver)",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l5190-wi-fi-all-in-one-ink-tank-printer-with-adf",
    model: "Epson L5190 Wi-Fi All-in-One Ink Tank Printer with ADF",
    image: l5190,
    pricePerMonth: "3,500.00",
    description:
      "Print, scan, copy, fax and connect with ease. The economical, multi-function EcoTank L5190 sports a variety of features that makes it the ideal printer for business. Save on printing with Epson’s affordable ink bottles, designed for spill- and error-free refilling via designated nozzles on the L5190’s integrated ink tanks. Enjoy a full suite of connectivity features such as Wi-Fi, Wi-Fi Direct and Ethernet. Choose the complete printing solution for business now.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Space-saving Design, Spill-free Refilling"
            className="mb-7"
          />
          <Description
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L5190, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 8 devices to the printer without a router."
            className="mb-12"
          />
          <Title variant="h1" text="Epson Connect Enabled" className="mb-7" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <Description text="Epson iPrint" className="underline mb-1" />
          <Description
            text="Print from and scan directly to your smart device or online cloud storage services."
            className="mb-6"
          />
          <Description text="Epson Email Print" className="underline mb-1" />
          <Description
            text="Print to any Email Print-enabled Epson printer from any device or PC with email access."
            className="mb-6"
          />
          <Description text="Remote Print Driver" className="underline mb-1" />
          <Description
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-1" />
          <Description text="- Google Cloud Print™" className="mb-1" />
          <Description text="- Apple AirPrint" className="mb-1" />
          <Description text="- Mopria Print Service" className="mb-12" />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L5190 prints at a high printing resolution of 5760 x 1400 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L5190 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Automatic Document Feeder"
            className="mb-7"
          />
          <Description
            text="The L5190 is equipped with a 30-sheets ADF unit for convenient scanning and copying of multipage documents."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="100-Page Fax Storage Memory"
            className="mb-7"
          />
          <Description
            text="The L5190 Broadcast Fax and PC-fax functions allow you to send a fax digitally with your computer, complete with a 100-page storage memory that ensures your incoming faxes will be received if the printer is out of paper or ink."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Epson Connect",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-l120-ink-tank-printer",
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    model: "Epson L6170 Wi-Fi Duplex All-in-One Ink Tank Printer with ADF",
    image: l6170,
    pricePerMonth: "4,000.00",
    description:
      "Experience high printing speeds and borderless printing for up to A4 size with Epson L6170 ink tank printer. Armed with PrecisionCore™ printheads, print speeds are improved for increased efficiency. The new tank design is integrated into the printer to allow the printer to have the smallest footprint* amongst all brands of ink tank printers that use bottled ink refills. Together with a new set of low-cost ink bottles which guarantees spill-free ink refilling and the paper-saving auto-duplex function, enjoy one of the lowest printing cost solutions you can find in the market. Maximise connectivity with a suite of Epson Connect features which enables printing on the go over a network.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Space-saving Design, Spill-free Refilling"
            className="mb-7"
          />
          <Description
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have the smallest footprint* amongst all brands of ink tank printers that use bottled ink refills."
            className="mb-6"
          />
          <Description
            text="Enjoy spill-free refilling with individual bottles which have unique nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Quality and Cost-savings"
            className="mb-7"
          />
          <Description
            text="Be impressed by reliable quality afforded by a 4800 dpi high resolution output. The L6170 prints black and white documents with razor sharp text that are water and smudge-resistant. You can also print lab-quality glossy photos on photo media paper."
            className="mb-12"
          />
          <Title variant="h1" text="Convenient Connectivity" className="mb-1" />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 4 devices to the printer without a router. The L6170 also comes enabled with Ethernet, ensuring superb connectivity, allowing you to easily share your printer within your work group for better use of resources."
            className="mb-12"
          />
          <Title variant="h1" text="Epson Connect Enabled" className="mb-7" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <Description text="Epson iPrint" className="underline mb-1" />
          <Description
            text="Print from and scan directly to your smart device or online cloud storage services."
            className="mb-6"
          />
          <Description text="Epson Email Print" className="underline mb-1" />
          <Description
            text="Print to any Email Print-enabled Epson printer from any device or PC with email access."
            className="mb-6"
          />
          <Description text="Remote Print Driver" className="underline mb-1" />
          <Description
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver or from mobile devices via the Epson iPrint app."
            className="mb-6"
          />
          <Description text="Scan to Cloud" className="underline mb-1" />
          <Description
            text="Share your scans through email or store them online in cloud storage services."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-1" />
          <Description text="Apple® AirPrint" className="underline mb-1" />
          <Description
            text="Print directly from your Apple devices."
            className="mb-6"
          />
          <Description text="Google Cloud Print™" className="underline mb-1" />
          <Description
            text="Print directly from an Android™ smartphone, tablet or PC using your Google account."
            className="mb-6"
          />
          <Description
            text="Mopria™ Print Service"
            className="underline mb-1"
          />
          <Description
            text="Conveniently print across different brands of printers from mobile devices running Android OS 4.4 or later."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              Epson Connect
            </Link>
            .
          </Typography>
          <Title variant="h1" text="Enhanced Productivity" className="mb-1" />
          <Title variant="h1" text="High Speed Printing" className="mb-7" />
          <Description
            text="Enjoy print speeds of up to 15ipm for standard print, along with draft print speeds of up to 33ppm with Epson’s PrecisionCoreTM printhead that offers versatile high-speed, high-quality solutions for commercial, industrial and office printing. The L6170 also supports automatic duplex printing up to 6.5ipm, helping you save up to 50% on paper costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Automatic Document Feeder"
            className="mb-7"
          />
          <Description
            text="The L6170 is equipped with a 30-sheets ADF unit for convenient scanning and copying of multipage documents."
            className="mb-12"
          />
          <Title variant="h1" text="LCD Screen" className="mb-7" />
          <Description
            text="Experience easy setup and PC-less operation with a 2.4” colour LCD panel."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description
            text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink to enjoy lasting quality with your L-series printer." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "Print speeds up to 15ipm for black and 8.0ipm for colour",
            "Auto-duplex printing",
            "ADF capability",
            "Ethernet &amp; Wi-Fi Direct",
            "Borderless Printing up to A4 size",
            "Spill-free ink refilling",
            "Red Dot Design Award 2018",
          ]}
        />
      );
    },
    related: [
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l120-ink-tank-printer",
    ],
  },
  {
    id: "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
    model: "Epson WorkForce WF-7711 A3 Wi-Fi Duplex All-in-One Inkjet Printer",
    image: wf7711,
    pricePerMonth: "5,500.00",
    description:
      "Change the way you print A3+ business documents with the Epson WorkForce WF-7711 printer. Designed for convenience, this smart printer is equipped with a suite of connectivity features, from USB and Ethernet to Wi-Fi Direct and NFC. With PrecisionCoreTM technology, fast printing speed consistently delivers success in every detail.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Enhanced Productivity" className="mb-7" />
          <Title variant="h3" text="High Speed Printing" className="mb-2" />
          <Description
            text="Enjoy default print speeds of up to 18ipm for black and 10ipm for colour, along with draft print speeds of up to 32ppm for black and 20ppm for colour with the Epson PrecisionCore printhead. The breakthrough PrecisionCore technology is equipped with versatile, high-speed solutions for commercial, industrial and office printing. Offering a vast improvement from the conventional piezo printheads, this technology delivers professional output quality at blazing speeds."
            className="mb-6"
          />
          <Title variant="h3" text="Print up to A3+" className="mb-2" />
          <Description
            text="WF-7711 supports borderless printing up to A3+ with special media."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Automatic Duplex Printing"
            className="mb-2"
          />
          <Description
            text="WF-7711 supports automatic duplex printing up to A3 size."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Duplex Automatic Document Feeder"
            className="mb-2"
          />
          <Description
            text="The WF-7711 is equipped with a 35-sheet duplex ADF unit for convenient scanning, copying and faxing of double-sided documents."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Affordable Laser-like Quality"
            className="mb-2"
          />
          <Description
            text="Epson DURABrite Ultra inks deliver brilliant, quick-drying, long-lasting prints on plain and photo paper that are water- and smudge-resistant. Achieve greater cost efficiency with high-yield cartridges that deliver high quality prints at lower running costs."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Network Connectivity and Standalone Capability"
            className="mb-2"
          />
          <Description
            text="Enjoy connectivity that’s perfect for your work environment. WF-7711 is equipped with Ethernet, Wi-Fi and Wi-Fi Direct, making it ideal for office and SOHO environments. The Wi-Fi Direct* connectivity acts like an access point and allows up to 4 devices to simultaneously connect directly to the printer."
            className="mb-7"
          />
          <Description
            text="*Wi-Fi and Wi-Fi Direct cannot be used simultaneously."
            className="mb-7 italic"
          />
          <Title variant="h3" text="Epson Connect Enabled" className="mb-2" />
          <Description
            text="With Epson Connect, there are many ways to wirelessly print your documents and photos from anywhere in the world:"
            className="mb-6"
          />
          <List
            lists={[
              "Epson iPrint - Print from and scan directly to your smart device or online cloud storage services.",
              "Epson Email Print - Print to any Email Print enabled Epson printer from any devices or PC with email access.",
              "Remote Print Driver - Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver or from mobile devices via the Epson iPrint app.",
              "Scan to Cloud - Share your scans through email or store them online in cloud storage services.",
            ]}
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <List
            lists={[
              "Apple® AirPrintTM",
              "Google Cloud PrintTM",
              "MopriaTM Print Service",
            ]}
            className="mb-6"
          />
          <Typography variant="h2" className="mb-7">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              Epson Connect
            </Link>
            .
          </Typography>
          <Title variant="h3" text="NFC Enabled" className="mb-2" />
          <Description
            text="Near Field Communication (NFC) enables users to conveniently print or scan by touching a compatible device to the printer. The WorkForce WF-7711 supports the following NFC functions:"
            className="mb-6"
          />
          <List
            lists={[
              "Tap to Install: If Epson iPrint is not installed in your AndroidTM device, touching the device to the printer opens the Epson iPrint installation page in Google PlayTM Store.",
              "Touch to Launch: If Epson iPrint is already installed in your Android device, touching the device to the printer launches it.",
              "Touch to Print / Scan: Select the function within Epson iPrint on your Android device, then touch the printer to print the selected photo or scan a document placed on the scanner.",
            ]}
            className="mb-7"
          />
          <Title variant="h3" text="Ease of Use" className="mb-0.5" />
          <Title variant="h3" text="LCD Screen" className="mb-2" />
          <Description
            text="Experience easy setup and PC-less operation with a 4.3″ LCD Touch Panel."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Single Sheet Rear Feeder"
            className="mb-2"
          />
          <Description
            text="A single sheet feeder lets you set labels, thick paper, envelopes and special photo paper conveniently."
            className="mb-7"
          />
          <Title variant="h3" text="Printer Security" className="mb-0.5" />
          <Title variant="h3" text="Limited Access Function" className="mb-2" />
          <Description
            text="Reduce risk of information leaks by limiting the access to functions for up to 10 user accounts."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Secured Printing with PIN Release"
            className="mb-2"
          />
          <Description
            text="Print confidential documents by setting a PIN to a print job for release on the printer panel."
            className="mb-7"
          />
          <Title variant="h3" text="LDAP Address Book" className="mb-2" />
          <Description
            text="Prevent information leaks by using the address book registered in the LDAP server to accurately select recipient E-mail addresses."
            className="mb-7"
          />
          <Title variant="h3" text="Panel Admin Mode" className="mb-2" />
          <Description text="Set a password to access and change administrator settings for the printer. This prevents unauthorised users from changing the printer settings." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print speeds up to 18ipm for black and 10ipm for colour",
            "USB, Ethernet, Wi-Fi, Wi-Fi Direct and NFC",
            "Duplex printing up to A3 size",
            "Epson DURABrite TM  Ultra ink",
            "4.3” Colour LCD Touch Pane",
            "Print, Scan, Copy Fax with ADF",
          ]}
        />
      );
    },
    related: [
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
    model: "Epson L1455 A3 Wi-Fi Duplex All-in-One Ink Tank Printer",
    image: l1455,
    pricePerMonth: "10,000.00",
    description:
      "Fully featured to meet the demands of the office, the Epson L1455 all-in one ink tank system printer takes productivity bigger with the ability to print documents up to A3+ size at high speeds through Epson’s PrecisionCore™ printhead technology and automatic duplex printing. Deliver high-quality documents, which are framed economically with the ability to yield 6,000 pages for black and 6,500 pages for colour through affordable inks. The L1455 integrates into any office through its complete suite of connectivity features.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Quality and Cost-savings"
            className="mb-7"
          />
          <Description
            text="The L1455 prints black and white documents with razor sharp text that are water and smudge-resistant. You can also print lab-quality glossy photos on photo media paper at a high resolution output of 4800dpi. Each set of inks yields 6,000 pages for black and 6,500 pages for colour, offering the lowest cost of printing duplex on an A3 printer*."
            className="mb-6"
          />
          <Description
            text="* As of 1 May 2016, the Epson L1455 offers users the lowest cost of printing duplex (cost per two-pages), for any inkjet printer capable of auto-duplex, using genuine branded supplies from its own manufacturer. This is based on the MSRP listed on the manufacturers’ websites in 5 major ASEAN markets."
            className="mb-12 italic"
          />
          <Title variant="h1" text="Supersized Productivity" className="mb-7" />
          <Title variant="h3" text="Print up to A3+" className="mb-2" />
          <Description
            text="Print larger and clearer documents, spreadsheets, diagrams and charts to bring out maximum detail and clarity at A3+ size. The multi-function L1455 supports copying and faxing up to A3 size as well."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="High Speed Duplex Printing"
            className="mb-2"
          />
          <Description
            text="Enjoy print speeds of up to 18ipm for A4 & 10ipm for A3 sized documents with Epson PrecisionCore printheads. The breakthrough PrecisionCore technology is equipped with versatile, high-speed solutions for commercial, industrial and office printing. Offering a vast improvement from the conventional piezo printheads, this technology delivers professional output quality at blazing speeds. The L1455 also supports automatic duplex printing up to 8.7ipm for A4, reducing paper consumption."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Duplex Automatic Document Feeder"
            className="mb-2"
          />
          <Description
            text="The L1455 is equipped with a 35-sheet duplex ADF unit for convenient scanning and copying of double-sided documents, even up to A3 size."
            className="mb-12"
          />
          <Title variant="h1" text="Convenient Connectivity" className="mb-7" />
          <Title
            variant="h3"
            text="Network Connectivity and Standalone Capability"
            className="mb-2"
          />
          <Description
            text="Equipped with Ethernet, Wi-Fi, and Wi-Fi Direct*, the L1455 is perfect for office environments. Wi-Fi Direct acts as an access point, allowing up to four devices to connect directly to the printer at a time without a router."
            className="mb-6"
          />
          <Description
            text="*Wi-Fi and Wi-Fi Direct cannot be used simultaneously."
            className="mb-7 italic"
          />
          <Title variant="h3" text="Epson Connect Enabled" className="mb-2" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <List
            lists={[
              "Epson iPrint",
              "Epson Email Print",
              "Remote Print Driver",
              "Scan to Cloud",
            ]}
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <List lists={["Google Cloud PrintTM"]} className="mb-6" />
          <Typography variant="h2" className="mb-7">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              http://www.epson.com.sg/connect
            </Link>
            .
          </Typography>
          <Title
            variant="h3"
            text="Compatibility with Epson Device Admin"
            className="mb-2"
          />
          <Description
            text="With Epson Device Admin, you can now manage, monitor and configure your Epson device fleet easily. It is compatible with a large range of networked printers and scanners, and views all information via one smart, intuitive interface."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Epson Device Admin Functions"
            className="mb-2"
          />
          <List
            lists={[
              "Manage Epson devices in groups.",
              "Receive automatic alerts when the device runs out of consumables or faces an error for quick response.",
              "Generate reports automatically for cost-savings activities or implementing managed print services.",
              "Configure multiple devices efficiently with templates to simplify large deployments.",
            ]}
            className="mb-6"
          />
          <Typography variant="h2" className="mb-7">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              http://www.epson.com.sg/connect
            </Link>
            .
          </Typography>
          <Title variant="h1" text="Ease of Use" className="mb-7" />
          <Title variant="h3" text="LCD Screen" className="mb-2" />
          <Description
            text="Experience easy setup and PC-less operation with a 4.3″ touchscreen colour LCD."
            className="mb-7"
          />
          <Title variant="h3" text="Dual 250 Sheets Input" className="mb-2" />
          <Description
            text="The L1455 comes equipped with dual 250-sheets input trays, allowing you to set 2 different paper sizes in separate trays, saving your time and effort in printing documents of different sizes.” touchscreen colour LCD."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Single Sheet Rear Feeder"
            className="mb-2"
          />
          <Description
            text="A single sheet feeder lets you set labels, thick paper, envelopes and photo paper conveniently.” touchscreen colour LCD."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Card Slots/USB Host Function"
            className="mb-2"
          />
          <Description
            text="The L1455 comes with card slots (SD Card & Memory Stick) and USB port for printing, scanning and saving faxes directly with memory devices."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Epson Warranty for Peace of Mind"
            className="mb-2"
          />
          <Description
            text="Enjoy warranty coverage for up to two years or 80,000 prints, whichever comes first, for maximum value from your printer. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Quality That Shines. Value That Lasts."
            className="mb-2"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink bottles to enjoy lasting quality with your L-series printer." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Scan, Copy up to A3 size",
            "Automatic Duplex",
            "Print speed up to 32ppm / 20ppm",
            "Fax and ADF capability",
            "Ethernet &amp; Wi-Fi Direct",
            "Dual input trays up to 250 sheets",
          ]}
        />
      );
    },
    related: [
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
];
