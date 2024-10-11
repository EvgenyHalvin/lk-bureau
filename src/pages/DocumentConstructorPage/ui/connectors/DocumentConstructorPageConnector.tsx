import { DocumentConstructorPage } from "../components";
import { DocumentOptionSelectionPanelConnector } from "./DocumentOptionSelectionPanelConnector";
import { DocumentsSidebarConnector } from "./DocumentsSidebarConnector";

export const DocumentConstructorPageConnector = () => {
  return (
    <DocumentConstructorPage>
      <DocumentsSidebarConnector />
      <DocumentOptionSelectionPanelConnector />
    </DocumentConstructorPage>
  );
};
