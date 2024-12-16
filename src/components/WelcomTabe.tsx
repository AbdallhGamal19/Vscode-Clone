import ImageIcon from "./ImageIcon.tsx";

const WelcomeTab = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <ImageIcon
        src="/icons/vscode.svg"
        className="w-64 h-64"
        alt="Welcom Image"
      />
    </div>
  );
};

export default WelcomeTab;
