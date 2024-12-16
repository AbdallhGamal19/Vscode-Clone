import { useSelector } from "react-redux";
import "./App.css";

import Preview from "./components/Preview.tsx";
import RecursiveComponent from "./components/RecursiveComponent.tsx";
import ResizablePanle from "./components/ResizablePanle.tsx";
import { fileTree } from "./data/fileTree.tsx";
import { RootState } from "./app/store.ts";
import WelcomTabe from "./components/WelcomTabe.tsx";

function App() {
  const { opendFiles } = useSelector(({ fileTree }: RootState) => fileTree);
  return (
    <div className="flex h-screen">
      <ResizablePanle
        showLeftpanle
        rightPanle={opendFiles.length ? <Preview /> : <WelcomTabe />}
        leftPanle={
          <div className=" p-2 min-w-52">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
      />
    </div>
  );
}

export default App;
