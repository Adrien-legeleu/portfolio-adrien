"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import ImgProfil from "@/public/images/about1.jpg";
import { IconMenuDeep } from "@tabler/icons-react";

export function HeaderDrawerResponsive() {
  const projects = [
    {
      title: "À propos",
      link: "#about",
    },
    {
      title: "Mes projets",
      link: "#projects",
    },
    {
      title: "Mon approche",
      link: "#approach",
    },
  ];
  return (
    <Drawer>
      {/* Bouton principal du menu */}
      <DrawerTrigger asChild>
        <div className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 w-60 gap-6 bg-neutral-800 rounded-3xl border border-neutral-700/50 flex justify-between items-center px-6 py-3 shadow-lg">
          <Link href="#home">
            <h2 className="sm:text-xl text-lg font-bold text-neutral-200 flex gap-3 items-center">
              <div className="relative flex items-center justify-center">
                <Image
                  src={ImgProfil}
                  width={50}
                  height={50}
                  alt="Photo de profil d'Adrien Legeleux, développeur"
                  className="rounded-full  min-w-8 max-w-8 min-h-8 max-h-8 object-cover"
                />
              </div>
              Adrien.
            </h2>
          </Link>
          <IconMenuDeep
            stroke={2}
            className="cursor-pointer text-neutral-200 hover:text-[#d1c4e9] transition-colors duration-300 h-8 w-8"
          />
        </div>
      </DrawerTrigger>

      {/* Contenu du menu */}
      <DrawerContent className="bg-neutral-900 text-neutral-200">
        <div className="mx-auto w-full max-w-sm px-6 py-4">
          <DrawerHeader>
            <DrawerTitle className="text-2xl text-center font-bold">
              Bienvenue !
            </DrawerTitle>
            <DrawerDescription className="text-sm text-center text-neutral-400">
              Parcourez mon portfolio et découvrez mes projets, mon parcours, et
              mon approche.
            </DrawerDescription>
          </DrawerHeader>
          <ul className="mt-4 space-y-4 text-center">
            {projects.map((item, idx) => (
              <li
                key={idx}
                className="text-lg hover:text-[#d1c4e9] transition-all duration-300"
              >
                <DrawerClose asChild>
                  <Link href={item.link}>{item.title}</Link>
                </DrawerClose>
              </li>
            ))}
          </ul>
          <DrawerFooter className="mt-8 flex justify-between gap-4">
            <Link href="#contact">
              <Button className="w-full">Me contacter</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="outline">Fermer</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
