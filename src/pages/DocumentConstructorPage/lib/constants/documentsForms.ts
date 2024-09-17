import {
  TAdvocateArbitrationProceedingsDocumentForm,
  TAdvocateCivilProceedingsDocumentForm,
  TDocumentLine,
  TProsecutorDocumentForm,
} from "../../types";

const ADVOCATE_ARBITRATION_PROCEEDINGS_DOCUMENTS_FORMS: Record<
  TAdvocateArbitrationProceedingsDocumentForm,
  string
> = {
  none: "Не выбрано",
  petition: "Ходатайство",
};

const ADVOCATE_CIVIL_PROCEEDINGS_DOCUMENTS_FORMS: Record<
  TAdvocateCivilProceedingsDocumentForm,
  string
> = {
  none: "Не выбрано",
};

const PROSECUTOR_DOCUMENTS_FORMS: Record<TProsecutorDocumentForm, string> = {
  none: "Не выбрано",
};

export const DOCUMENTS_FORMS: Record<TDocumentLine, object> = {
  none: {},
  advocateArbitrationProceedings:
    ADVOCATE_ARBITRATION_PROCEEDINGS_DOCUMENTS_FORMS,
  advocateCivilProceedings: ADVOCATE_CIVIL_PROCEEDINGS_DOCUMENTS_FORMS,
  prosecutor: PROSECUTOR_DOCUMENTS_FORMS,
};
