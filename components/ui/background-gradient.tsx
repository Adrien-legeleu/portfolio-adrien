"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(animate);

  // Utilisation d'un effet pour gérer l'animation de manière simple avec un setInterval
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* Première div animée */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          isAnimating ? "bg-position-animate" : "bg-position-static"
        )}
        style={{
          backgroundSize: isAnimating ? "400% 400%" : undefined,
          transition: "background-position 5s ease-in-out",
        }}
      />
      {/* Deuxième div animée */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
          isAnimating ? "bg-position-animate" : "bg-position-static"
        )}
        style={{
          backgroundSize: isAnimating ? "400% 400%" : undefined,
          transition: "background-position 5s ease-in-out",
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
