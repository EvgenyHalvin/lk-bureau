import { Paper, Stack, Typography, styled } from "@mui/material";

const ContentWrapper = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%",
  padding: "16px",
  gap: "24px",
}));

type Props = {
  title: string | null;
};

export const DocumentOptionSelectionPanel = ({ title }: Props) => {
  return (
    <ContentWrapper elevation={0}>
      <Stack>
        <Typography variant="h5">{title}</Typography>
      </Stack>
    </ContentWrapper>
  );
};
