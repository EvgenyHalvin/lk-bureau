import { DocumentConstructorPage } from "../components";
import { DocumentsSidebarConnector } from "./DocumentsSidebarConnector";

export const DocumentConstructorPageConnector = () => {
  return (
    <DocumentConstructorPage>
      <DocumentsSidebarConnector />
    </DocumentConstructorPage>
  );
};
