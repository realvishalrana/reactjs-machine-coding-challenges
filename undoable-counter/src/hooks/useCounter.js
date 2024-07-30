import { useReducer, useState } from "react";

const useCounter = () => {
  const initialState = {
    count: 0,
    history: [],
    undoStack: [],
    redoStack: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
      case "SUBTRACT": {
        const newCount = state.count + action.value;
        const newHistoryEntry = `${action.label} (${state.count} → ${newCount})`;

        return {
          ...state,
          count: newCount,
          history: [newHistoryEntry, ...state.history].slice(0, 50),
          undoStack: [
            { value: action.value, label: action.label },
            ...state.undoStack,
          ].slice(0, 50),
          redoStack: [],
        };
      }
      case "UNDO": {
        if (state.undoStack.length === 0) return state;
        const lastAction = state.undoStack[0];
        const newCount = state.count - lastAction.value;
        const newHistoryEntry = `Undo ${lastAction.label} (${state.count} → ${newCount})`;

        return {
          ...state,
          count: newCount,
          history: [newHistoryEntry, ...state.history].slice(0, 50),
          undoStack: state.undoStack.slice(1),
          redoStack: [lastAction, ...state.redoStack].slice(0, 50),
        };
      }
      case "REDO": {
        if (state.redoStack.length === 0) return state;

        const lastUndoneAction = state.redoStack[0];
        const newCount = state.count + lastUndoneAction.value;
        const newHistoryEntry = `Redo ${lastUndoneAction.label} (${state.count} -> ${newCount})`;

        return {
          ...state,
          count: newCount,
          history: [newHistoryEntry, ...state.history].slice(0, 50),
          undoStack: [lastUndoneAction, ...state.undoStack].slice(0, 50),
          redoStack: state.redoStack.slice(1),
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [customValue, setCustomValue] = useState("");

  const handleAction = (value, label) => {
    dispatch({ type: value > 0 ? "ADD" : "SUBTRACT", value, label });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  const handleRedo = () => {
    dispatch({ type: "REDO" });
  };

  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);
  };

  const handleAddCustomValue = () => {
    const value = parseInt(customValue, 10);
    if (!isNaN(value)) {
      handleAction(value, value >= 0 ? `+${value}` : `${value}`);
      setCustomValue("");
    }
  };

  return {
    state,
    customValue,
    handleAction,
    handleUndo,
    handleRedo,
    handleCustomValueChange,
    handleAddCustomValue,
  };
};

export default useCounter;
