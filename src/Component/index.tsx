import * as React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

const getDataAsync = () => {
  return new Promise<{}>((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });
};

class State {
  foo = "some string";

  isLoading: boolean = false;
  data?: {} = undefined;
  error?: any = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get fooLength() {
    return this.foo.length;
  }

  changeFoo = (newFoo: string) => {
    this.foo = newFoo;
  };

  loadAsync = () => {
    this.isLoading = true;

    return getDataAsync()
      .then((result) => {
        this.data = result;
      })
      .catch((error) => {
        this.error = error;
      }).finally;
  };
}

export const state = new State();

export const Component: React.FC = observer(({ children }) => {
  const { loadAsync, isLoading, data } = state;

  return (
    <>
      {data && <>{JSON.stringify(data, null, 2)}</>}
      {isLoading && <span>isLoading</span>}
      {isLoading && <span>isLoading</span>}
      <button
        onClick={() => {
          loadAsync();
        }}
      >
        change
      </button>
    </>
  );
});

<Component />;
