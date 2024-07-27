import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import PrinterContent from "@/module/Printers/Content";
import { printers } from "@/module/Printers/printersData";
import { Metadata, ResolvingMetadata } from "next";

type Prop = {
  params: { printer: string };
};

export async function generateMetadata(
  { params }: Prop,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const printerId = params.printer;

  const filterPrinter = printers.filter((printer) => printer.id === printerId);

  const printerName = filterPrinter[0]?.model;
  const printerDescription = filterPrinter[0]?.description;

  return {
    title: `${printerName} - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    description: printerDescription,
    openGraph: {
      title: `${printerName} - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
      description: printerDescription,
      url: `https://printerrentalsph.com/printers/${printerId}`,
      siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${printerName} - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
      description: printerDescription,
    },
  };
}

const PrintersPage = () => {
  return (
    <WidthWrapper width="medium" className="px-0 md:px-4">
      <PrinterContent />
    </WidthWrapper>
  );
};

export default PrintersPage;
