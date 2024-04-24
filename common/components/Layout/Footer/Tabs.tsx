"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Tab {
  name: string;
  icon?: JSX.Element;
  link: string;
  isSelected?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  className: ReactNode;
}

const Tabs = ({ tabs, className }: TabsProps) => {
  const currentPath = usePathname();

  return (
    <div className={`${className}`}>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
          value={currentPath}
          onChange={(e) => (window.location.href = e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.link} selected={tab.isSelected}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.link} passHref={true}>
              <div className="mt-6 font-semibold">{tab.name}</div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
