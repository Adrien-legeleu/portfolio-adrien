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
    <div className="my-20 grid grid-cols-2 gap-20 px-5" id="contact">
      <FormContact />
      <div className="space-y-10">
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
            "p-8 text-[#d1c4e9] bg-dot-white/[0.2] rounded-3xl flex-col space-y-2"
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
        <div className="space-y-5">
          <h4 className="text-xl text-center">Vous avez des questions ?</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels services proposez-vous ?
              </AccordionTrigger>
              <AccordionContent>
                Je propose le développement et l’optimisation de sites web et
                applications web, la création d'interfaces modernes et adaptées,
                ainsi que des conseils pour améliorer votre présence en ligne.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels sont vos délais habituels ?
              </AccordionTrigger>
              <AccordionContent>
                Cela dépend du projet, mais je m’efforce de livrer rapidement
                tout en maintenant une qualité optimale. Parlons-en pour définir
                vos besoins !
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quels outils utilisez-vous ?</AccordionTrigger>
              <AccordionContent>
                J'utilise des technologies modernes comme Typescript, Next.js,
                TailwindCSS, et bien d'autres pour garantir des sites
                performants et évolutifs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Est-il possible d’avoir un devis gratuit ?
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
