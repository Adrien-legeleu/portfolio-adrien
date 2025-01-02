import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-20 pb-[6px] flex items-center justify-center flex-col gap-8">
      <h2 className="text-3xl max-w-xl text-center max-sm:px-10 font-bold">
        Prêt à faire passer <span className="text-[#d1c4e9] ">votre</span>{" "}
        présence digitale au niveau supérieur ?
      </h2>
      <p className="text-sm text-neutral-400 max-w-md max-sm:px-10 text-center">
        Contactez-moi dès aujourd’hui pour transformer vos idées en projets
        concrets et percutants.
      </p>
      <Link href="#contact">
        <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d1c4e9] focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1c4e9_0%,#7E57C2_50%,#d1c4e9_100%)]" />
          <span className="inline-flex gap-4 text-base text-[#d1c4e9] font-bold h-full w-full cursor-pointer tracking-wider items-center justify-center rounded-md bg-slate-950 px-5 py-3 backdrop-blur-3xl">
            Commençons maintenant !
            <IconSend stroke={2} width={18} height={18} />
          </span>
        </button>
      </Link>
      <div className="flex justify-between items-end mt-16 w-full px-8">
        <span className="text-sm text-neutral-300">
          Copyright ©2025 Adrien Legeleux
        </span>
        <ul className="flex gap-6">
          <li className="hover:scale-110 transform transition-all duration-300 cursor-pointer">
            <a
              href="https://github.com/Adrien-legeleu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aller sur mon compte Github"
            >
              <IconBrandGithub stroke={2} />
            </a>
          </li>
          <li className="hover:scale-110 transform transition-all duration-300 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/adrien-legeleux/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aller sur mon compte Linkedin"
            >
              <IconBrandLinkedin stroke={2} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
