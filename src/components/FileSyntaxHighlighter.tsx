import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface IProps {
  contetnt: string | undefined;
}

const FileSyntaxHighlighter = ({ contetnt }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
        fontSize: "1.5rem",
      }}
      showLineNumbers
    >
      {String(contetnt)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
