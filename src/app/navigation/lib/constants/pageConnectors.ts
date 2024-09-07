import { lazy } from "react";

import { withSuspense } from "@shared/ui";

export const NotFoundPage = withSuspense(
  lazy(() => import("@pages/NotFoundPage"))
);

export const DocumentConstructorPage = withSuspense(
  lazy(() => import("@pages/DocumentConstructorPage"))
);
