import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces/index.ts";
interface IClickedFile {
  activeId: string | null;
  fileName: string;
  fileContent: string | undefined;
}
interface IInitialState {
  opendFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}
const initialState: IInitialState = {
  opendFiles: [],
  clickedFile: {
    activeId: null,
    fileName: "",
    fileContent: "",
  },
  tabIdToRemove: null,
};
const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpendFileAction: (state, action: PayloadAction<IFile[]>) => {
      state.opendFiles = action.payload;
    },
    setClickedFileaction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTabIdToRemoveaction: (state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload;
    },
  },
});
export const {
  setOpendFileAction,
  setClickedFileaction,
  setTabIdToRemoveaction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
