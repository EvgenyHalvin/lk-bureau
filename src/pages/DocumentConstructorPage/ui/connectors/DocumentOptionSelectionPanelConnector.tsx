import { useDocumentConstructorStore } from "../../model";
import { DocumentOptionSelectionPanel } from "../components";

export const DocumentOptionSelectionPanelConnector = () => {
  const { selectedDocument } = useDocumentConstructorStore();

  const title = selectedDocument.label;

  return <DocumentOptionSelectionPanel title={title} />;
};
