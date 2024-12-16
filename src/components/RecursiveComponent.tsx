import { useState } from "react";
import { IFile } from "../interfaces/index.ts";
import RightArrowIcon from "./SVG/RightArrowIcon.tsx";
import BottomArrowIcon from "./SVG/BottomArrowIcon.tsx";
import RenderFileIcon from "./RenderFileIcon.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import {
  setClickedFileaction,
  setOpendFileAction,
} from "../app/features/fileTreeSlice.ts";
import { doesFileObjectExist } from "../utils/index.ts";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const dispatch = useDispatch();
  const { opendFiles } = useSelector((state: RootState) => state.fileTree);
  const { id, isFolder, name, children, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const exist = doesFileObjectExist(opendFiles, id);
  //Handlres

  const toggel = () => {
    setIsOpen((prev) => !prev);
  };
  const onFileClicked = () => {
    dispatch(
      setClickedFileaction({
        activeId: id,
        fileName: name,
        fileContent: content,
      })
    );
    if (exist) return;
    dispatch(setOpendFileAction([...opendFiles, fileTree]));
  };
  return (
    <div className="w-full mb-1 ml-1.5 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggel} className="flex items-center">
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>

            <RenderFileIcon filename={name} isFolder isOpen={isOpen} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-6" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
