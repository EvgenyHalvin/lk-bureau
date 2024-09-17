import { TProceedingEnum } from "../../types";

export const PROCEEDINGS: Record<TProceedingEnum, string> = {
  none: "Не выбрано",
  advocateArbitrationProceedings:
    "Адвокатская линия (Арбитражное судопроизводство)",
  advocateCivilProceedings: "Адвокатская линия (Гражданское судопроизводство)",
};
