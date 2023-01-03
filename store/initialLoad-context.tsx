import {
  createContext,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react";

interface ContextState {
  // set the type of state you want to handle with context e.g.
  firstLoad: boolean;
  setFirstLoad: (value: boolean) => void;
}

const InitialLoadContext = createContext({} as ContextState);

export default InitialLoadContext;
