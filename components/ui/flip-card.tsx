"use client";
import { cn } from "@/lib/utils";
import ShineBorder from "./shine-border";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: React.ReactNode;
  description: string;
  duration?: number;
  subtitle?: string;
  rotate?: "x" | "y";
}

export function FlipCard({
  title,
  description,
  duration,
  subtitle,
  rotate = "y",

  ...props
}: FlipCardProps) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-96 w-72 [perspective:1000px]")} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}

        <ShineBorder
          className="text-center absolute h-full w-full text-2xl font-bold capitalize [backface-visibility:hidden]"
          color={"#D1C4E9"}
          duration={duration}
        >
          <div className="">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              {title}
            </div>
          </div>
        </ShineBorder>

        {/* Back */}

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
            "absolute bg-[#12071B]/80 p-4 text-[#d1c4e9] [backface-visibility:hidden] flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg flex-col space-y-2",
            self[1]
          )}
        >
          <motion.div className="flex flex-col gap-5 h-full items-center justify-center">
            <h1 className="text-xl px-12 text-center font-bold text-[#ccbee4]">
              {subtitle}
            </h1>
            <p className="px-5 text-center text-xs font-medium leading-normal text-[#D1C4E9]">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
