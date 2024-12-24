import project1 from "@/public/images/projects/app-banque.netlify.app_(Nest Hub Max).png";
import project2 from "@/public/images/projects/le-resto.netlify.app_(Nest Hub Max).png";
import project3 from "@/public/images/projects/lurex.netlify.app_(Nest Hub Max) (1).png";
import project4 from "@/public/images/projects/orlumiere.netlify.app_(Nest Hub) (1).png";
import project5 from "@/public/images/projects/sturmayr.netlify.app_(Nest Hub Max).png";
import project6 from "@/public/images/projects/sushifood.netlify.app_(Nest Hub Max).png";
import project7 from "@/public/images/projects/villa-tyklouyou.netlify.app_(Nest Hub Max).png";
import project8 from "@/public/images/projects/lucassportfolio.netlify.app_(Nest Hub Max).png";

import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandJavascript,
  IconBrandNextjs,
} from "@tabler/icons-react";

export const projectsData = [
  {
    img: project1,
    title: "Naseem - Banque App",
    link: "https://app-banque.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandTypescript />,
    ],
    video: "/video/video-bank.mp4", // Vérifie que ce chemin est correct dans ton dossier public
    color: "#090C18",
    description:
      "Application bancaire avec une interface utilisateur interactive et des fonctionnalités de gestion financière.",
  },
  {
    img: project2,
    title: "Le Resto",
    link: "https://le-resto.netlify.app/",
    languages: [<IconBrandReact />, <IconBrandSass />, <IconBrandJavascript />],
    video: "/video/video-restaurant.mp4",
    color: "#21201E",
    description:
      "Application de restaurant permettant de parcourir le menu et de passer des commandes en ligne.",
  },
  {
    img: project3,
    title: "Lurex",
    link: "https://lurex.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-lurex.mp4",
    color: "#1A1A1A",
    description:
      "Site web de présentation pour une entreprise de textile avec une interface moderne.",
  },
  {
    img: project4,
    title: "Or Lumière",
    link: "https://orlumiere.netlify.app/",
    languages: [
      <IconBrandNextjs />,
      <IconBrandTailwind />,
      <IconBrandTypescript />,
    ],
    video: "video/video-orlumiere.mp4",
    color: "#FFFFFF",
    description:
      "Site web de présentation pour une entreprise spécialisée dans l'éclairage, mettant en valeur leurs services et réalisations.",
  },
  {
    img: project5,
    title: "Sturmayr",
    link: "https://sturmayr.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-sturmayr.mp4",
    color: "#1C1C1C",
    description:
      "Site web pour une entreprise de construction avec des projets et des services détaillés.",
  },
  {
    img: project6,
    title: "Sushi Food",
    link: "https://sushifood.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-sushi.mp4",
    color: "#2A2A2A",
    description:
      "Application de commande de sushi en ligne avec un menu interactif et des options de personnalisation.",
  },
  {
    img: project7,
    title: "Villa Tyklouyou",
    link: "https://villa-tyklouyou.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-villa.mp4",
    color: "#333333",
    description:
      "Site web pour une villa de location avec des informations sur les chambres, les services et les réservations.",
  },
  {
    img: project8,
    title: "Lucas Portfolio",
    link: "https://lucassportfolio.netlify.app/",
    languages: [
      <IconBrandReact />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-portfolio.mp4",
    color: "#444444",
    description:
      "Portfolio personnel pour un développeur web avec des projets, des compétences et des informations de contact.",
  },
];
