import { HoverEffect } from "@/components/ui/list-hover-effect";
import React from "react";
import Image from "next/image";
import ImgProfil from "@/public/images/about (1).jpg";

export default function Header() {
  return (
    <div className="fixed z-50 top-5 left-1/2 -translate-x-1/2 w-1/2 bg-neutral-800 rounded-2xl border border-neutral-700/50 flex justify-between items-center px-5 py-2">
      <h2 className="text-xl flex gap-3 items-center justify-center">
        {" "}
        <div className="w-full relative flex items-center justify-center">
          <Image
            src={ImgProfil}
            width={100}
            height={100}
            alt="profil développeur adrien legeleux "
            className="rounded-full w-10 h-10 object-cover "
          />
        </div>
        Adrien.
      </h2>
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
