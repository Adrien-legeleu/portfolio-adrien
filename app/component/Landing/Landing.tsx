import { Button } from "@/components/ui/button";

import { Spotlight } from "@/components/ui/spotlight";

export default function Landing() {
  return (
    <div className="h-screen w-full flex justify-center text-center items-center ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#b19cd9"
      />
      <div className="space-y-5">
        <h6 className="text-white text-xs relative top-2">
          FullStack Développeur
        </h6>
        <h1 className="text-5xl text-white max-w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          <span className="text-[#d1c4e9]"> Clients Satisfaits</span>{" "}
        </h1>
        <p className="text-white text-lg max-w-xl m-auto">
          Salut Je suis <span className="text-[#d1c4e9]"> Adrien Legeleux</span>{" "}
        </p>
        <Button>Mes projets</Button>
      </div>
    </div>
  );
}
