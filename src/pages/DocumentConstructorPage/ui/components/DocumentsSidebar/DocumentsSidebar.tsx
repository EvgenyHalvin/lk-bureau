import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Paper, Stack, Typography, styled } from "@mui/material";

import { TSelectOption } from "@shared/ui/components/Select";
import { Select } from "@shared/ui";

import {
  DEFAULT_DOCUMENTS_SIDEBAR_VALUES,
  PROCEEDINGS,
  DOCUMENTS_TYPES,
  DOCUMENTS,
  getOptions,
} from "../../../lib";
import {
  TDocumentEnum,
  TDocumentTypeEnum,
  TDocumentsSidebarFields,
  TSelectedDocument,
} from "../../../types";

const StyledDocumentsSidebar = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "380px",
  width: "100%",
  height: "100%",
  padding: "16px",
  gap: "24px",
}));

type Props = {
  onSelectDocument: (value: TSelectedDocument) => void;
};

export const DocumentsSidebar = ({ onSelectDocument }: Props) => {
  const { control, watch, reset, setValue } = useForm<TDocumentsSidebarFields>({
    defaultValues: DEFAULT_DOCUMENTS_SIDEBAR_VALUES,
  });

  const onResetHandler = () => reset();

  const documentProceeding = watch("proceeding");
  const documentType = watch("documentType");

  const documentProceedings = getOptions(PROCEEDINGS);
  const documentTypes = getOptions(DOCUMENTS_TYPES[documentProceeding]);
  const documents = getOptions(
    DOCUMENTS[documentProceeding]?.[documentType] ?? {}
  );

  const isDocumentTypesHidden = documentProceeding === "none";
  const isDocumentsHidden = documentType === "none";

  const onItemClickHandler = ({ label, value }: TSelectOption) =>
    onSelectDocument({
      value: String(value) as TDocumentEnum,
      label: label,
    });

  useEffect(() => {
    setValue("documentType", TDocumentTypeEnum.none);
    setValue("document", TDocumentEnum.none);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentProceeding]);

  useEffect(() => {
    setValue("document", TDocumentEnum.none);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentType]);

  return (
    <StyledDocumentsSidebar elevation={0}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Выбор шаблона</Typography>
        <Button variant="contained" disableElevation onClick={onResetHandler}>
          Сбросить
        </Button>
      </Stack>

      <Stack gap="16px">
        <Controller
          control={control}
          name="proceeding"
          render={({ field }) => (
            <Select
              label="Линия"
              options={documentProceedings}
              selectProps={field}
            />
          )}
        />

        {isDocumentTypesHidden ? null : (
          <Controller
            control={control}
            name="documentType"
            render={({ field }) => (
              <Select
                label="Форма"
                options={documentTypes}
                selectProps={field}
              />
            )}
          />
        )}

        {isDocumentsHidden ? null : (
          <Controller
            control={control}
            name="document"
            render={({ field }) => (
              <Select
                label="Документ"
                options={documents}
                selectProps={field}
                onItemClick={onItemClickHandler}
              />
            )}
          />
        )}
      </Stack>
    </StyledDocumentsSidebar>
  );
};
