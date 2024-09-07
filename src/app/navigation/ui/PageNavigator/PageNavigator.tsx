import { pageNavigators } from "../../../navigation/lib";
import { TPageNavigator } from "../../types";

type Props = {
  page: TPageNavigator;
};

export const PageNavigator = ({ page }: Props) => {
  return (pageNavigators[page] ?? pageNavigators[404]) as JSX.Element;
};
