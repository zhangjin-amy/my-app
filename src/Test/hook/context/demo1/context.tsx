import React, { useReducer, useContext } from "react";

/** 暴露出CountProvider, useCount */

interface State {
  count: number;
}

type Action = {type: 'increment'} | {type: 'decrement'}

type Dispatch = (action: Action) => void;

interface CountProviderProps {
  children: React.ReactNode;
}

const countReducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      throw new Error(`can not handle ${action['type']}`);
    }
};

// const initDispatch: Dispatch = (action: Action) => void;

const CountContext = React.createContext<{state: State, dispatch: Dispatch} | undefined>(undefined);
// const CountContext = React.createContext({state: initState, dispatch: initDispatch});

const CountProvider = ({children}: CountProviderProps) => {
  const [state, dispatch] = useReducer(countReducer, {count: 0})
  const value = {state, dispatch}
  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = useContext(CountContext);
  return context;
}

export {
  CountProvider,
  useCount
}