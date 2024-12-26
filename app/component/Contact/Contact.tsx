"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ScriptCopyBtn from "@/components/ui/script-copy-btn";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <div className="my-20 grid grid-cols-2 gap-20">
      <div>
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
      </div>
      <div>FAQ</div>
    </div>
  );
};

export default Contact;
