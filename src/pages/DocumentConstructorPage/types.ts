export enum TProceedingEnum {
  none = "none",
  advocateArbitrationProceedings = "advocateArbitrationProceedings",
  advocateCivilProceedings = "advocateCivilProceedings",
}

export enum TDocumentTypeEnum {
  none = "none",
  petition = "petition",
}

export enum TDocumentEnum {
  none = "none",
  onlineMeetingAttendance = "onlineMeetingAttendance",
  materialsFamiliarization = "materialsFamiliarization",
}

export type TDocumentsSidebarFields = {
  proceeding: TProceedingEnum;
  documentType: TDocumentTypeEnum;
  document: TDocumentEnum;
};
