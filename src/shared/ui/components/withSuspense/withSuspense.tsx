import { ComponentType, Suspense, SuspenseProps } from "react";

export const withSuspense = <P extends object>(
  WrappedComponent: ComponentType<P>,
  fallback: SuspenseProps["fallback"] = null
) => {
  const WithSuspense = (props: P) => {
    const fallbackComponent = fallback ?? null;

    return (
      <Suspense fallback={fallbackComponent}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return WithSuspense;
};
