import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import favicon from "@/app/favicon.png";

export const metadata: Metadata = {
  title: "Adrien Legeleux | Développeur Fullstack",
  description:
    "Bienvenue sur le portfolio d'Adrien Legeleux, développeur fullstack spécialisé en création de sites web modernes et optimisés. Découvrez mes projets et compétences.",
  keywords: [
    "Adrien Legeleux",
    "Développeur Fullstack",
    "Portfolio développeur",
    "Création de sites web",
    "Développement web",
    "SEO",
    "Next.js",
    "marketing digitale",
  ],
  authors: [{ name: "Adrien Legeleux", url: "https://adrien-legeleux.dev" }],
  openGraph: {
    title: "Adrien Legeleux | Développeur Fullstack",
    description:
      "Découvrez le portfolio d'Adrien Legeleux, un développeur fullstack passionné par la création de solutions digitales innovantes et performantes.",
    url: "https://adrien-legeleux.dev",
    images: [
      {
        url: "/favicon.png",
        alt: "Logo Adrien Legeleux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@adrienlegeleux",
    title: "Adrien Legeleux | Développeur Fullstack",
    description:
      "Explorez mes projets et compétences en développement web fullstack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href={favicon.src}
          type="image/png"
          className="rounded-full object-cover"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Toaster />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
