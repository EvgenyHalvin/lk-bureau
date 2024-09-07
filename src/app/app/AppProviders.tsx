import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
