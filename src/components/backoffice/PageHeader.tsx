import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Route } from "next";

export default function PageHeader({
  heading,
  linkTitle,
  href,
}: {
  linkTitle: string;
  heading: string;
  href: Route;
}) {
  return (
    <div className="flex  justify-between py-2 mb-2">
      <Heading title={heading} />
      <Link
        href={href}
        className="
           space-x-3
          text-white bg-blue-600 hover:bg-blue-600/90 focus:right-4
          focus:outline-none
          focus:ring-blue-6 bg-blue-600/50 font-medium rounded-lg
          text-base px-5 py-3 text-center
           inline-flex items-center dark:focus:ring-lime-6  me-2 mb-2"
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
