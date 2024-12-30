"use client";
import { HoverEffect } from "@/components/ui/list-hover-effect";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImgProfil from "@/public/images/about (1).jpg";
import Link from "next/link";
import { HeaderDrawerResponsive } from "./HeaderDrawerResponsive";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderDrawerResponsive />
      ) : (
        <div className="fixed z-50 top-5 left-1/2  -translate-x-1/2 xl:w-[55%] lg:w-[66%] w-[80%] gap-10 bg-neutral-800 rounded-3xl border border-neutral-700/50 flex justify-between items-center px-3 py-2">
          <Link href="#home">
            <h2 className="lg:text-xl text-lg  flex gap-3 items-center justify-center">
              {" "}
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ImgProfil}
                  width={50}
                  height={50}
                  alt="profil développeur adrien legeleux "
                  className="rounded-full min-w-8 max-w-8 min-h-8 max-h-8 lg:min-w-12 lg:max-w-12 lg:min-h-12 lg:max-h-12 object-cover "
                />
              </div>
              Adrien.
            </h2>
          </Link>
          <HoverEffect items={projects} />
        </div>
      )}
    </>
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
