"use client";

import { FlipCard } from "../../../components/ui/flip-card";

const Approach = () => {
  return (
    <div className="py-20" id="approach">
      <h2 className="sm:text-4xl text-2xl px-4 font-bold space-y-1 max-w-xl mx-auto text-indigo-purple dark:text-indigo-light text-center">
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] dark:text-black p-3 sm:text-4xl text-xl inline-block rounded-lg rotate-3 text-neutral-50">
          Mon Approche
        </span>
        <span className="inline-block">en Tant que Développeur Web</span>
      </h2>
      <div className="flex gap-4 mt-28 justify-around">
        <FlipCard
          description="Nous travaillons ensemble pour définir les objectifs de votre site, votre audience cible et les fonctionnalités clés. Nous discuterons de la structure, de la navigation et des besoins en contenu."
          image=""
          duration={24}
          rotate="y"
          subtitle="Planification & Stratégie"
          title={
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d1c4e9] focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1c4e9_0%,#7E57C2_50%,#d1c4e9_100%)]" />
              <span className="inline-flex text-base text-[#d1c4e9]font-bold h-full w-full cursor-pointer tracking-wider items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
                Phase 1
              </span>
            </button>
          }
        />
        <FlipCard
          description="Une fois le plan validé, je commence à coder tout en vous tenant informé à chaque étape, du croquis initial au code finalisé."
          image=""
          rotate="y"
          duration={20}
          subtitle="Développement & Suivi"
          title={
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d1c4e9] focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1c4e9_0%,#7E57C2_50%,#d1c4e9_100%)]" />
              <span className="inline-flex text-base text-[#d1c4e9]font-bold h-full w-full cursor-pointer tracking-wider items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
                Phase 2
              </span>
            </button>
          }
        />
        <FlipCard
          description="C’est ici que la magie opère. À partir du design validé, je transforme chaque élément en code fonctionnel et je construis votre site de A à Z."
          image=""
          rotate="y"
          duration={16}
          subtitle="Finalisation & Lancement"
          title={
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d1c4e9] focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1c4e9_0%,#7E57C2_50%,#d1c4e9_100%)]" />
              <span className="inline-flex text-base text-[#d1c4e9]font-bold h-full w-full cursor-pointer tracking-wider items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
                Phase 3
              </span>
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Approach;
