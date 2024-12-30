"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import { Label } from "./LabelContact";
import { Input } from "./inputContact";
import { Textarea } from "./TextareaContact";
import { IconSend } from "@tabler/icons-react";

export function FormContact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire envoyé");
  };
  return (
    <div className="w-full mx-auto rounded-none md:rounded-3xl border p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-200">
        Un projet en tête ? Parlons-en !
      </h2>
      <p className="text-sm max-w-sm mt-2 text-center text-neutral-300">
        Vous avez une idée, une question ou besoin d'aide pour développer un
        site web ? Remplissez ce formulaire et je reviendrai vers vous
        rapidement pour en discuter.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Prénom</Label>
            <Input id="firstname" placeholder="Jean" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Nom</Label>
            <Input id="lastname" placeholder="Dupont" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="jean.dupont@example.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tel">Téléphone</Label>
          <Input id="tel" placeholder="07 68 73 52 38" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Textarea
            placeholder="Tapez votre message ici..."
            name="message"
            id="message"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-b gap-4 relative group/btn flex items-center justify-center from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Envoyer
          <IconSend stroke={2} width={18} height={18} />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
