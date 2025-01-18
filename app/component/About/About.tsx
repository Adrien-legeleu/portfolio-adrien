"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Img1 from "@/public/images/analyse-de-performance.png";
import Img2 from "@/public/images/itineraire.png";
import Img3 from "@/public/images/ux.png";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="space-y-20">
      <div className="flex items-center justify-center max-w-3xl mx-auto flex-col gap-10 text-center">
        <h2 className="text-3xl  font-bold">À propos</h2>
        <p className="text-neutral-200 text-lg leading-relaxed tracking-wider">
          Actuellement, je travaille avec Ikovaline, une start-up innovante dans
          le domaine du marketing digital. Nous aidons les entreprises à
          développer leur visibilité en ligne et à atteindre leurs objectifs
          grâce à des stratégies sur mesure, telles que l'optimisation SEO, la
          gestion de Google My Business, et bien plus encore. Découvrez notre
          mission et nos réalisations sur{" "}
          <a href="https://ikovaline.com" className="text-indigo-500 underline">
            {" "}
            <Button> Ikovaline</Button>
          </a>
          .
        </p>
      </div>
      <BentoGrid className="max-w-5xl mx-auto   md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex-shrink-0" />
        <p className="text-xs text-neutral-400">
          Analyser les besoins spécifiques de chaque client.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-5/6 ml-auto bg-black"
      >
        <p className="text-xs pl-1 text-neutral-400">
          Élaborer des solutions sur mesure.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex-shrink-0" />
        <p className="text-xs text-neutral-400">
          Assurer une satisfaction optimale.
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      {data_skeleton_two.map((data, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-white/[0.2] p-3 text-xs text-neutral-400 items-center space-x-2 bg-black w-full h-4"
        >
          {data}
        </motion.div>
      ))}
    </motion.div>
  );
};
const data_skeleton_two = [
  "Next js",
  "Node js",
  "Tailwind",
  "React",
  "Typescript",
];

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

// Adjusted to match input skeleton style
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2"
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          variants={i === 0 ? first : second}
          className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
        >
          <Image
            src={card.src}
            alt={card.alt}
            height="100"
            width="100"
            className=" h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">
            {card.text}
          </p>
          <p
            className={`border text-xs rounded-full px-2 py-0.5 mt-4 ${card.labelStyle}`}
          >
            {card.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const cards = [
  {
    alt: "performances",
    text: "Analyse approfondie des performances.",
    label: "Rapidité",
    labelStyle: "border-green-500 bg-green-900/20 text-green-600",
    src: Img1,
  },
  {
    alt: "optimisation",
    text: "Optimisation pour une fluidité maximale.",
    label: "Efficacité",
    labelStyle: "border-blue-500 bg-blue-900/20 text-blue-600",
    src: Img2,
  },
  {
    alt: "expérience utilisateur",
    text: "Amélioration de l'expérience utilisateur.",
    label: "Confort",
    labelStyle: "border-purple-500 bg-purple-900/20 text-purple-600",
    src: Img3,
  },
];

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2 items-start space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <p className="text-xs text-neutral-400">
          Automatisez les tâches répétitives et gagnez du temps grâce à des
          solutions efficaces et modernes.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-400">Efficacité garantie.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Je priorise les besoins des clients",
    description: (
      <span className="text-sm">
        Créer des solutions sur mesure est ma priorité.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ma stack technologique",
    description: (
      <span className="text-sm">
        Je m&apos;efforce de maîtriser et d&apos;améliorer constamment mes
        outils.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dynamisme et flexibilité",
    description: (
      <span className="text-sm">
        Chaque projet évolue: je m&apos;assure d&apos;offrir des solutions
        vivantes et adaptées aux besoins changeants.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Analyse des performances",
    description: (
      <span className="text-sm">
        J&apos;évalue et optimise les sites pour offrir une expérience fluide et
        rapide.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automatisation et efficacité",
    description: (
      <span className="text-sm">
        Concevoir des interfaces intuitives et accessibles pour tous.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
