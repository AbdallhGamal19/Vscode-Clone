export interface IFile {
  id: string;
  name: string;
  children?: IFile[];
  isFolder: boolean;
  content?: string;
}
