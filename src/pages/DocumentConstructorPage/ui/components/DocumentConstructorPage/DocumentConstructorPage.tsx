import { ReactNode } from "react";
import { Stack, styled } from "@mui/material";

const PageLayout = styled(Stack)(() => ({
  width: "100%",
  height: "100vh",
  padding: 16,
}));

const PageContent = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  margin: "0 auto",
  maxWidth: theme.breakpoints.values.xl,
  flexDirection: "row",
}));

type Props = {
  children: ReactNode;
};

export const DocumentConstructorPage = ({ children }: Props) => {
  return (
    <PageLayout>
      <PageContent>{children}</PageContent>
    </PageLayout>
  );
};
