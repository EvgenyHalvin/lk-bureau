export type TDocumentLine =
  | "none"
  | "advocateArbitrationProceedings"
  | "advocateCivilProceedings"
  | "prosecutor";

export type TAdvocateArbitrationProceedingsDocumentForm = "none" | "petition";
export type TAdvocateCivilProceedingsDocumentForm = "none";
export type TProsecutorDocumentForm = "none";

export type TDocumentForm =
  | TAdvocateArbitrationProceedingsDocumentForm
  | TAdvocateCivilProceedingsDocumentForm
  | TProsecutorDocumentForm;

export type TAdvocateArbitrationProceedingsDocument =
  | "none"
  | "onlineMeetingAttendance"
  | "materialsFamiliarization";

export type TDocument = TAdvocateArbitrationProceedingsDocument;

export type TDocumentsSidebarFields = {
  line: TDocumentLine;
  documentForm: TDocumentForm;
  document: TDocument;
};
