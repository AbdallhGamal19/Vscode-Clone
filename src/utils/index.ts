import { IFile } from "./../interfaces/index";
export const doesFileObjectExist = (arr: IFile[], id: string) => {
  return arr.some((obj) => obj.id === id);
};
