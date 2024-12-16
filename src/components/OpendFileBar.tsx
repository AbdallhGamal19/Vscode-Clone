import { RootState } from "../app/store.ts";
import { useSelector } from "react-redux";
import OpendFileBarTab from "./OpendFileBarTab.tsx";
import ContextMenu from "./UI/ContextMenu.tsx";
import { useState } from "react";

// interface IProps {}

const OpendFileBar = () => {
  const [showDropMenu, setshowDropMenu] = useState<boolean>(false);
  const [posationMenu, setPosationMenu] = useState({
    x: 0,
    y: 0,
  });
  const { opendFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <>
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setPosationMenu({ x: e.clientX, y: e.clientY });
          setshowDropMenu(true);
        }}
      >
        {showDropMenu && (
          <ContextMenu
            positions={posationMenu}
            setshowDropMenu={setshowDropMenu}
          />
        )}
        {opendFiles.map((file, idx) => (
          <OpendFileBarTab file={file} key={idx} />
        ))}
      </div>
    </>
  );
};

export default OpendFileBar;
