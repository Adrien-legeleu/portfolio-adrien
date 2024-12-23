import { Button } from "@/components/ui/button";

import { Spotlight } from "@/components/ui/spotlight";

export default function Landing() {
  return (
    <div className="h-screen w-full flex justify-center text-center items-center ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#b19cd9"
      />
      <div className="space-y-3">
        <h6 className="text-white text-xs">FullStack Développeur</h6>
        <h1 className="text-5xl text-white">
          Salut Je suis <br />
          <span className="text-[#d1c4e9]"> Adrien Legeleux</span>{" "}
        </h1>
        <p className="text-white max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odio at
          officia! Laudantium architecto adipisci et earum praesentium similique
          voluptatem.
        </p>
        <Button>Mes projets</Button>
      </div>
    </div>
  );
}
