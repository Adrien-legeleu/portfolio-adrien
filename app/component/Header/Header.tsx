import { HoverEffect } from "@/components/ui/list-hover-effect";
import React from "react";
import Image from "next/image";
import ImgProfil from "@/public/images/about (1).jpg";

export default function Header() {
  return (
    <div className="fixed z-50 top-5 left-1/2  -translate-x-1/2 w-[55%] gap-10 bg-neutral-800 rounded-3xl border border-neutral-700/50 flex justify-between items-center px-5 py-2">
      <h2 className="text-xl  flex gap-3 items-center justify-center">
        {" "}
        <div className="w-full relative flex items-center justify-center">
          <Image
            src={ImgProfil}
            width={100}
            height={100}
            alt="profil développeur adrien legeleux "
            className="rounded-full w-20 h-8 object-cover "
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
    title: "A propos",

    link: "#about",
  },
  {
    title: "Mes projects",
    link: "#projects",
  },
  {
    title: "Mon approche",

    link: "#approach",
  },
  {
    title: "Contactez-moi",

    link: "#contact",
  },
];
