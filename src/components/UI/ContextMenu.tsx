import { useRef, useEffect } from "react";
import { setOpendFileAction } from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  setshowDropMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setshowDropMenu }: IProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const { opendFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.fileTree
  );

  // ** Handlers
  const onCloseAll = () => {
    dispatch(setOpendFileAction([]));
    setshowDropMenu(false);
  };
  const onClose = () => {
    const filtered = opendFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpendFileAction(filtered));
    setshowDropMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      /*more secure code app can run with out this code 
       if (menuRef.current && menuRef.current.contains(event?.target as Node)) {
         setshowDropMenu(false);
      }
         app can run with this only code
         setshowDropMenu(false);
         */
      //menuRef.current.contains(event.target as Node) => check if clucked element is the same element of menuRef or not
      //if you do not understand ask chatgpt or make console.log(menuRef.current.contains(event.target as Node)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setshowDropMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setshowDropMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
