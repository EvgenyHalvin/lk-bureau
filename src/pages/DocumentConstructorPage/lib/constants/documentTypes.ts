import {
  TDocumentTypeEnum,
  TProceedingEnum,
} from "@pages/DocumentConstructorPage/types";

const ADVOCATE_ARBITRATION_PROCEEDINGS_DOCUMENTS_FORMS = {
  none: "Не выбрано",
  petition: "Ходатайство",
};

const ADVOCATE_CIVIL_PROCEEDINGS_DOCUMENTS_FORMS = {
  none: "Не выбрано",
};

export const DOCUMENTS_TYPES: Record<
  TProceedingEnum,
  { [key in TDocumentTypeEnum]?: string }
> = {
  none: {},
  advocateArbitrationProceedings:
    ADVOCATE_ARBITRATION_PROCEEDINGS_DOCUMENTS_FORMS,
  advocateCivilProceedings: ADVOCATE_CIVIL_PROCEEDINGS_DOCUMENTS_FORMS,
};
