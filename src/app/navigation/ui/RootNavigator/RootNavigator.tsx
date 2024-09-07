import { Routes, Route, Navigate } from "react-router-dom";

import { APP_PATHS } from "@shared/config";

import { PageNavigator } from "../PageNavigator";

export const RootNavigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={APP_PATHS.documentConstructor.basePath} />}
      />
      <Route
        path={APP_PATHS.documentConstructor.basePath}
        element={<PageNavigator page="document-constructor" />}
      />
      <Route path="*" element={<PageNavigator page="404" />} />
    </Routes>
  );
};
