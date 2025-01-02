import { Button } from "@/components/ui/button";
import LetterPullup from "@/components/ui/letter-pullup";
import MorphingText from "@/components/ui/morphing-text";
import { Spotlight } from "@/components/ui/spotlight";
import WordPullUp from "@/components/ui/word-pull-up";
import Link from "next/link";

export default function Landing() {
  const texts = ["créativité !", "innovation !", "impact !"];

  return (
    <div
      className="h-screen w-full xs:px-0 px-4 flex justify-center text-center items-center"
      id="home"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#c9a9e6"
      />
      <div className="space-y-5">
        <WordPullUp className="text-neutral-300 text-xs relative top-2">
          Développeur FullStack
        </WordPullUp>

        <h1 className="xs:text-5xl md:text-5xl 2xl:text-6xl text-4xl text-white max-w-3xl ">
          Donnez vie à vos idées avec{" "}
          <span className="text-[#c9a9e6]">
            <MorphingText texts={texts} />
          </span>
        </h1>
        <div className="text-white flex items-center justify-center text-lg max-w-xl mx-auto">
          <LetterPullup words={"Bienvenue, je suis "} delay={0.05} />
          <LetterPullup
            words={"Adrien Legeleux"}
            delay={0.05}
            className="text-[#c9a9e6] text-center"
          />
        </div>
        <Link href={"#projects"} className="flex justify-center">
          <Button>Voir mes projets</Button>
        </Link>
      </div>
    </div>
  );
}
