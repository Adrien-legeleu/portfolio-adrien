"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ApproachSlideResponsive() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category:
      "Nous travaillons ensemble pour définir les objectifs de votre site, votre audience cible et les fonctionnalités clés. Nous discuterons de la structure, de la navigation et des besoins en contenu.",
    title: "Planification & Stratégie",
    phase: "Phase 1",
  },
  {
    category:
      "Une fois le plan validé, je commence à coder tout en vous tenant informé à chaque étape, du croquis initial au code finalisé.",
    title: "Développement & Suivi",
    phase: "Phase 2",
  },
  {
    category:
      "C’est ici que la magie opère. À partir du design validé, je transforme chaque élément en code fonctionnel et je construis votre site de A à Z.",
    title: "Finalisation & Lancement",
    phase: "Phase 3",
  },
];
