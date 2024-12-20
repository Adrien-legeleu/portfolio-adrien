import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImgProfil from "@/public/images/about (1).jpg";

export default function Landing() {
  return (
    <div className="h-screen w-full grid grid-cols-2 justify-between items-center  ">
      <div className="space-y-3">
        <h6 className="text-neutral-300 text-xs">FullStack Deeloppeur</h6>
        <h1 className="text-5xl">
          Salut Je suis <br />
          <span className="text-primary"> Adrien Legeleux</span>
        </h1>
        <p className="text-neutral-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odio at
          officia! Laudantium architecto adipisci et earum praesentium similique
          voluptatem.
        </p>
        <Button>Mes projets</Button>
      </div>
      <div className="w-full relative flex items-center justify-center">
        <Image
          src={ImgProfil}
          width={500}
          height={500}
          alt="profil développeur adrien legeleux "
          className="rounded-full w-1/2 "
        />
      </div>
    </div>
  );
}
