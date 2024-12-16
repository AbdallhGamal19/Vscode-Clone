import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter.tsx";
import OpendFileBar from "./OpendFileBar.tsx";
import { RootState } from "../app/store.ts";
const Preview = () => {
  const { clickedFile } = useSelector(({ fileTree }: RootState) => fileTree);
  return (
    <div>
      <OpendFileBar />
      <FileSyntaxHighlighter contetnt={clickedFile.fileContent} />
    </div>
  );
};

export default Preview;
