import { create } from "zustand";

import { TDocumentEnum, TSelectedDocument } from "../../types";

type Store = {
  selectedDocument: TSelectedDocument;
  updateSelectedDocument: (value: TSelectedDocument) => void;
};

export const useDocumentConstructorStore = create<Store>((set) => ({
  selectedDocument: { value: TDocumentEnum.none, label: "Документ не выбран" },
  updateSelectedDocument: (value: TSelectedDocument) =>
    set(() => ({ selectedDocument: value })),
}));
