import { extensionIconPaths } from "../constatnt/index.ts";
import ImageIcon from "./ImageIcon.tsx";
import FileIcon from "./SVG/FileIcon.tsx";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extension = filename.split(".").pop();
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const pathIcon = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;
    return <ImageIcon src={pathIcon} />;
  }

  if (isFolder && isOpen)
    return <ImageIcon src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <ImageIcon src="/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
