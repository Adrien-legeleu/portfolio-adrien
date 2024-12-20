import { HoverEffect } from "@/components/ui/list-hover-effect";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-5 left-20 w-1/2 bg-neutral-800/80 rounded-2xl border border-neutral-700/50 flex justify-between items-center px-5 py-2">
      <h2 className="text-xl">Adrien.</h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Mesprojets",
    link: "https://stripe.com",
  },
  {
    title: "A propos",

    link: "https://netflix.com",
  },
  {
    title: "technologies",

    link: "https://google.com",
  },
  {
    title: "Réalisations",

    link: "https://meta.com",
  },
];
