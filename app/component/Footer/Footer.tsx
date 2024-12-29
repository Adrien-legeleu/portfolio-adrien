import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="pt-20 pb-2 flex items-center justify-center flex-col gap-8">
      <h2 className="text-3xl max-w-xl  text-center font-bold ">
        Pret a rendre <span className="text-[#d1c4e9]">votre</span> présence
        digitale sur un niveu supérieur
      </h2>
      <p className="text-xs text-neutral-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        consequatur soluta cum!
      </p>
      <button className="relative inline-flex h-10 overflow-hidden rounded-sm  p-[1px] focus:outline-none focus:ring-2 focus:ring-[#d1c4e9] focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1c4e9_0%,#7E57C2_50%,#d1c4e9_100%)]" />
        <span className="inline-flex gap-4 text-base text-[#d1c4e9]font-bold h-full w-full cursor-pointer tracking-wider items-center justify-center rounded-sm bg-slate-950 px-5 py-3 backdrop-blur-3xl">
          Commencons maintenant ! <IconSend stroke={2} width={18} height={18} />
        </span>
      </button>
      <div className="flex justify-between mt-20 w-full px-10">
        <span className="text-sm">Copyright ©2025 Adrien Legeleux</span>
        <ul className="flex gap-4">
          <li className="hover:scale-110 transform transition-all duration-300 cursor-pointer">
            <a href="https://github.com/Adrien-legeleu">
              <IconBrandGithub stroke={2} />
            </a>
          </li>
          <li className="hover:scale-110 transform transition-all duration-300 cursor-pointer">
            <a href="https://www.linkedin.com/in/adrien-legeleux/">
              {" "}
              <IconBrandLinkedin stroke={2} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
