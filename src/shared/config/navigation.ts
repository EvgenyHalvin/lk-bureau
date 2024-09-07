export type TNavPath =
  | string
  | {
      basePath: string;
      routes?: { [route: string]: string };
    };

export type TAppPaths = Record<string, TNavPath>;

const getPaths = <T extends TAppPaths>(o: T) => o;

export const APP_PATHS = getPaths({
  documentConstructor: {
    basePath: "/document-constructor",
  },
});
