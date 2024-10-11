import { useDocumentConstructorStore } from "../../model";
import { DocumentsSidebar } from "../components";

export const DocumentsSidebarConnector = () => {
  const { updateSelectedDocument } = useDocumentConstructorStore();

  return <DocumentsSidebar onSelectDocument={updateSelectedDocument} />;
};
