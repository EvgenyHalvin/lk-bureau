import { Button, Paper, Stack, Typography, styled } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { Select } from "@shared/ui";

import {
  DEFAULT_DOCUMENTS_SIDEBAR_VALUES,
  DOCUMENTS_FORMS,
  DOCUMENTS_LINES,
  getOptions,
} from "../../../lib";
import { TDocumentsSidebarFields } from "../../../types";

const StyledDocumentsSidebar = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "380px",
  width: "100%",
  height: "100%",
  padding: "16px",
  gap: "24px",
}));

export const DocumentsSidebar = () => {
  const { control, watch, reset } = useForm<TDocumentsSidebarFields>({
    defaultValues: DEFAULT_DOCUMENTS_SIDEBAR_VALUES,
  });

  const onResetHandler = () => reset();

  const documentLine = watch("line");
  const documentForm = watch("documentForm");

  const documentLinesOptions = getOptions(DOCUMENTS_LINES);
  const documentFormOptions = getOptions(DOCUMENTS_FORMS[documentLine]);

  const isDocumentFormsHidden = documentLine === "none";
  const isDocumentsHidden = documentForm === "none";

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
          name="line"
          render={({ field }) => (
            <Select
              label="Линия"
              options={documentLinesOptions}
              selectProps={field}
            />
          )}
        />

        {isDocumentFormsHidden ? null : (
          <Controller
            control={control}
            name="documentForm"
            render={({ field }) => (
              <Select
                label="Форма"
                options={documentFormOptions}
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
              <Select label="Документ" options={[]} selectProps={field} />
            )}
          />
        )}
      </Stack>
    </StyledDocumentsSidebar>
  );
};
