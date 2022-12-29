import { createContext, MutableRefObject, RefObject } from "react";

interface ContextState {
  // set the type of state you want to handle with context e.g.
  mainTimeline: MutableRefObject<GSAPTimeline> | null;
}

const GsapContext = createContext({} as ContextState);

export default GsapContext;
