type User = {
  id: number;
};

const f: User = {
  id: 2,
};

type CallbackFunction = (a: number) => number;

export const someUtilFunction = (a: number): number => {
  return a;
};

export const identity = <T>(input: T): T => {
  return input;
};

someUtilFunction(2);
