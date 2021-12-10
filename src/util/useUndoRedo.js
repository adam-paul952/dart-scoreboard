import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  const { past, present, future } = state;
  const { type, newPresent } = action;

  switch (type) {
    case "undo": {
      if (past.length === 0) {
        return state;
      }
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }
    case "redo": {
      if (future.length === 0) {
        return state;
      }
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }
    case "set": {
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }
  }
};

const useUndoRedo = (initialState) => {
  const [state, dispatch] = useReducer(reducer, {
    past: [],
    present: initialState,
    future: [],
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  const undo = useCallback(() => dispatch({ type: "undo" }), []);
  const redo = useCallback(() => dispatch({ type: "redo" }), []);
  const set = useCallback(
    (newPresent) => dispatch({ type: "set", newPresent }),
    []
  );

  return [state, { set, undo, redo, canUndo, canRedo }];
};

export default useUndoRedo;
