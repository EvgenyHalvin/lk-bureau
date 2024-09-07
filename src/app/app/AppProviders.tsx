import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type Props = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </Fragment>
  );
};
