import { printers } from "@/module/Printers/printersData";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseUrls = [
    `${process.env.BASE_URL}`,
    `${process.env.BASE_URL}/blog`,
    `${process.env.BASE_URL}/about`,
    `${process.env.BASE_URL}/contact`,
    `${process.env.BASE_URL}/printers`,
  ];

  const printerUrls = printers.map(
    (printer) => `${process.env.BASE_URL}/printers/${printer.id}`
  );

  const allUrls = [...baseUrls, ...printerUrls];

  return allUrls.map((url) => ({
    url,
    lastModified,
  }));
}
