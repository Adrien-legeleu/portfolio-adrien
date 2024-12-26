const Contact = () => {
  const customCommandMap = {
    npm: "npm run shadcn add button",
    yarn: "yarn shadcn add button",
    pnpm: "pnpm dlx shadcn@latest add button",
    bun: "bun x shadcn@latest add button",
  };
  return (
    <div>
      <div>
        <div>
          <h3>Vous Voulez commencez un projet ensemble ?</h3>
          <ScriptCopyBtn
            showMultiplePackageOptions={true}
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap}
          />
        </div>
      </div>
      <div>FAQ</div>
    </div>
  );
};

export default Contact;
