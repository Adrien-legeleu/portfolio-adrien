import React from "react";
import { projectsData } from "@/data/projects-data";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Project() {
  return (
    <div
      className="space-y-12 relative py-20 w-full my-28 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="projects"
    >
      <div className="absolute pointer-events-none -z-0 inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      <div className="flex flex-col gap-8 items-center justify-center w-full pb-10">
        <h2 className="sm:text-4xl text-2xl px-4 font-bold space-y-1 text-indigo-purple dark:text-indigo-light text-center">
          <span className="inline-block ">Découvrez nos</span>
          <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] dark:text-black p-3 sm:text-4xl text-xl inline-block rounded-lg rotate-3 text-neutral-50">
            Projets réalisés
          </span>
        </h2>
        <p className="text-center text-lg px-8 max-w-4xl  leading-relaxed text-neutral-400">
          Parcourez une sélection de projets innovants et créatifs réalisés dans
          divers domaines du développement web. Chaque projet représente une
          expérience unique en matière de technologie, d&lsquo;innovation, et de
          résolution de défis numériques.
        </p>
      </div>
      <ul className="grid xl:grid-cols-3  z-10 md:grid-cols-2 px-10 max-w-[1500px] mx-auto max-md:overflow-y-scroll max-md:h-screen items-center justify-center w-full gap-24 ">
        {projectsData.map((project, idx) => {
          return (
            <li className="" key={`project numéro ${idx}`}>
              <PinContainer title={project.title} href={project.link}>
                <div className="flex basis-full flex-col gap-4   p-4 tracking-tight  text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22.5rem] ">
                  <div className="w-full rounded-lg relative">
                    <Image
                      src={project.img}
                      width={200}
                      height={200}
                      className="w-full h-full rounded-lg object-contain "
                      alt={`image de  ${project.title}`}
                    />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-400 text-xs ">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <ul className="flex gap-2">
                      {project.languages.map((language, idx) => (
                        <li
                          className="text-purple-300"
                          key={`language numéro ${idx}`}
                        >
                          {language}
                        </li>
                      ))}
                    </ul>
                    <Button>Visiter le site</Button>
                  </div>
                </div>
              </PinContainer>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
