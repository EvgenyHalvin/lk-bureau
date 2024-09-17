import { styled } from "@mui/material";

import { AppProviders } from "./AppProviders";
import { RootNavigator } from "../navigation";

const RootWrapper = styled("main")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.grey[300],
  width: "100%",
  height: "100vh",
}));

export const App = () => {
  return (
    <AppProviders>
      <RootWrapper>
        <RootNavigator />
      </RootWrapper>
    </AppProviders>
  );
};
