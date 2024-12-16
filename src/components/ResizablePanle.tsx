import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanle: ReactNode;
  rightPanle: ReactNode;
  showLeftpanle: boolean;
}

const ResizablePanle = ({
  defaultLayout = [33, 67],
  showLeftpanle,
  leftPanle,
  rightPanle,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      autoSaveId="conditional"
      direction="horizontal"
      onLayout={onLayout}
    >
      {showLeftpanle && (
        <>
          <Panel defaultSize={defaultLayout[0]}>{leftPanle}</Panel>
          <PanelResizeHandle className="border-r border-white  border-[#ffffff1f]" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanle}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanle;
