type TReturnType = { value: string | number; label: string }[];

export const getOptions = (data: object): TReturnType => {
  return Object.entries(data).map(([value, label]) => ({ value, label }));
};
