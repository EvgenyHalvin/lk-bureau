import { ReactNode } from "react";

import * as connectors from "./pageConnectors";
import { TPageNavigator } from "../../types";

export const pageNavigators: Record<TPageNavigator, ReactNode> = {
  "document-constructor": <connectors.DocumentConstructorPage />,
  "404": <connectors.NotFoundPage />,
};
