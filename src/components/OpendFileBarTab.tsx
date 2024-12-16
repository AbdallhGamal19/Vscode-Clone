import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces/index.ts";
import RenderFileIcon from "./RenderFileIcon.tsx";
import CloseIcon from "./SVG/CloseIcon.tsx";
import {
  setClickedFileaction,
  setOpendFileAction,
  setTabIdToRemoveaction,
} from "../app/features/fileTreeSlice.ts";
import { RootState } from "../app/store.ts";

interface IProps {
  file: IFile;
}

const OpendFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  const {
    clickedFile: { activeId },
    opendFiles,
  } = useSelector((state: RootState) => state.fileTree);

  //** Hanelars
  const { id, content, name } = file;
  const onClick = () => {
    dispatch(
      setClickedFileaction({
        fileName: name,
        fileContent: content,
        activeId: id,
      })
    );
  };
  const onRemoveHandelar = (selectedId: string) => {
    const filterd = opendFiles.filter((file) => file.id !== selectedId);
    const lastTabe = filterd[filterd.length - 1];
    if (!lastTabe) {
      dispatch(setOpendFileAction(filterd));
      dispatch(
        setClickedFileaction({
          activeId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { content, name, id } = lastTabe;

    dispatch(setOpendFileAction(filterd));
    dispatch(
      setClickedFileaction({
        activeId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };
  return (
    <div
      onClick={() => onClick()}
      className={`flex items-center p-2 border-t-2 ${
        activeId == id ? "border-[#cf6ccf] " : " border-transparent"
      }`}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemoveaction(id));
      }}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex items-center justify-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onRemoveHandelar(id);
        }}
        className="cursor-pointer   flex items-center justify-center hover:bg-[#64646473] mx-2  duration-300 w-fit  p-1 rounded-md"
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpendFileBarTab;
