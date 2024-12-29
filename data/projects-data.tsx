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
    video: "/video/video-bank.mp4",
    color: "#090C18",
    description:
      "Une application bancaire moderne avec une interface fluide pour gérer vos finances au quotidien.",
  },
  {
    img: project2,
    title: "Le Resto",
    link: "https://le-resto.netlify.app/",
    languages: [<IconBrandReact />, <IconBrandSass />, <IconBrandJavascript />],
    video: "/video/video-restaurant.mp4",
    color: "#21201E",
    description:
      "Site élégant pour un restaurant, avec un menu interactif et la possibilité de réserver facilement en ligne.",
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
    video: "/video/video-orlumiere.mp4",
    color: "#FFFFFF",
    description:
      "Vitrine numérique d'une marque de bijoux, mettant en avant des créations élégantes et intemporelles.",
  },
  {
    img: project5,
    title: "Sturmayr",
    link: "https://sturmayr.netlify.app/",
    languages: [
      <IconBrandNextjs />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-sturmayr.mp4",
    color: "#1C1C1C",
    description:
      "Un site moderne et épuré pour un salon de coiffure, avec une présentation des services et une galerie des styles réalisés.",
  },
  {
    img: project6,
    title: "Sushi Food",
    link: "https://sushifood.netlify.app/",
    languages: [
      <IconBrandNextjs />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-sushi.mp4",
    color: "#2A2A2A",
    description:
      "Un site pratique et interactif pour commander des sushis, avec un menu clair et des options personnalisées.",
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
      "Site web élégant pour une entreprise de location de voitures de luxe, alliant style et fonctionnalité.",
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
      "Un site immersif pour une villa de location, avec des photos captivantes et des informations détaillées sur les services.",
  },
  {
    img: project8,
    title: "Lucas Portfolio",
    link: "https://lucassportfolio.netlify.app/",
    languages: [
      <IconBrandNextjs />,
      <IconBrandTailwind />,
      <IconBrandJavascript />,
    ],
    video: "/video/video-portfolio.mp4",
    color: "#444444",
    description:
      "Un portfolio simple et moderne pour un développeur web, mettant en avant ses compétences et ses projets.",
  },
];
