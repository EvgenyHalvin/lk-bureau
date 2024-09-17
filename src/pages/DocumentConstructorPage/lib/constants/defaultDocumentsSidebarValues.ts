import {
  TProceedingEnum,
  TDocumentTypeEnum,
  TDocumentEnum,
  TDocumentsSidebarFields,
} from "../../types";

export const DEFAULT_DOCUMENTS_SIDEBAR_VALUES: TDocumentsSidebarFields = {
  proceeding: TProceedingEnum.none,
  documentType: TDocumentTypeEnum.none,
  document: TDocumentEnum.none,
};
