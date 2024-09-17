import { TDocumentEnum, TDocumentTypeEnum, TProceedingEnum } from "../../types";

export const DOCUMENTS: Record<
  TProceedingEnum,
  { [key in TDocumentTypeEnum]?: { [key in TDocumentEnum]?: string } }
> = {
  none: {},
  advocateArbitrationProceedings: {
    petition: {
      none: "Не выбрано",
      onlineMeetingAttendance: "Об участии в онлайн-заседании",
      materialsFamiliarization: "Об ознакомлении с материалами дела",
    },
  },
  advocateCivilProceedings: {
    none: {},
  },
};
