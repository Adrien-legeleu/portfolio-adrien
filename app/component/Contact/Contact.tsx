"use client";
import ScriptCopyBtn from "@/components/ui/script-copy-btn";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormContact } from "./Form";

const Contact = () => {
  const customCommandMap1 = {
    email: "adrienlegeleu@gmail.com",
  };
  const customCommandMap2 = {
    tel: "07 68 73 52 38",
  };
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className="my-20 grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto   lg:gap-20 gap-10 sm:px-5 2xl:px-0 "
      id="contact"
    >
      <FormContact />
      <div className="space-y-10 md:row-span-1 max-md:row-start-2 max-md:grid max-md:grid-cols-51/49 max-sm:grid-cols-1 max-md:gap-10 max-sm:mb-10 max-sm:gap-0 items-center justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background:
              "linear-gradient(-45deg, #1A0721, #4A148C, #7E57C2, #1C102F)",
            backgroundSize: "400% 400%",
          }}
          className={cn(
            "lg:p-8 p-4 text-[#d1c4e9] bg-dot-white/[0.2] rounded-3xl flex-col space-y-2 max-sm:row-span-2"
          )}
        >
          <h3 className="text-xl text-center">
            Prêt à démarrer un projet ensemble ?
          </h3>
          <ScriptCopyBtn
            showMultiplePackageOptions={false}
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap1}
          />
          <ScriptCopyBtn
            showMultiplePackageOptions={false}
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap2}
          />
        </motion.div>
        <div
          className="space-y-5 max-md:overflow-y-scroll h-64 max-sm:row-span-1 "
          style={{ scrollbarWidth: "none" }}
        >
          <h4 className="text-xl text-center">Vous avez des questions ?</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels services proposez-vous ?
              </AccordionTrigger>
              <AccordionContent>
                Je propose le développement et l&apos;optimisation de sites web
                et applications web, la création d&apos;interfaces modernes et
                adaptées, ainsi que des conseils pour améliorer votre présence
                en ligne.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels sont vos délais habituels ?
              </AccordionTrigger>
              <AccordionContent>
                Cela dépend du projet, mais je m&apos;efforce de livrer
                rapidement tout en maintenant une qualité optimale. Parlons-en
                pour définir vos besoins !
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quels outils utilisez-vous ?</AccordionTrigger>
              <AccordionContent>
                J&apos;utilise des technologies modernes comme Typescript,
                Next.js, TailwindCSS, et bien d&apos;autres pour garantir des
                sites performants et évolutifs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Est-il possible d&apos;avoir un devis gratuit ?
              </AccordionTrigger>
              <AccordionContent>
                Bien sûr ! Contactez-moi via le formulaire et je vous fournirai
                une estimation personnalisée.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Travaillez-vous sur des projets personnels ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, je travaille également sur des projets personnels mais
                également professionnels pour enrichir mes compétences et
                expérimenter de nouvelles technologies. Cela contribue à
                améliorer mes services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
