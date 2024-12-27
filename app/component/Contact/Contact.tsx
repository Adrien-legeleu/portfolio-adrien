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
    <div className="my-20 grid grid-cols-2 gap-20 px-5">
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
            " p-8 text-[#d1c4e9]   bg-dot-white/[0.2] rounded-3xl flex-col space-y-2"
          )}
        >
          <h3 className="text-xl text-center">
            Vous voulez commencez un projet ensemble ?
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
          <h4 className="text-xl text-center">
            Vous vous posez des questions ?
          </h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
