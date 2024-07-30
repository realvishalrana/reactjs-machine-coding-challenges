import React from "react";
import Button from "../widgets/Button";
import { nFormatter } from "../utils/helper";

const DisplayCounter = (props) => {
  const {
    state,
    customValue,
    handleAction,
    handleRedo,
    handleUndo,
    handleCustomValueChange,
    handleAddCustomValue,
  } = props;

  return (
    <div>
      <h1 className="count">Count: {nFormatter( state.count)}</h1>
      <div className="action-buttons">
        <Button onClick={() => handleAction(1, "+1")} title="+1" />
        <Button onClick={() => handleAction(10, "+10")} title="+10" />
        <Button onClick={() => handleAction(100, "+100")} title="+100" />
        <Button onClick={() => handleAction(-1, "-1")} title="-1" />
        <Button onClick={() => handleAction(-10, "-10")} title="-10" />
        <Button onClick={() => handleAction(-100, "-100")} title="-100" />
      </div>
      <br />
      <div className="action-history-controls">
        <Button
          onClick={handleUndo}
          title="Undo"
          disabled={state.undoStack.length === 0}
        />
        <Button
          onClick={handleRedo}
          title="Redo"
          disabled={state.redoStack.length === 0}
        />
      </div>
      <div className="custom-value-controls">
        <input
          type="number"
          value={customValue}
          onChange={handleCustomValueChange}
          placeholder="Enter custom value"
        />
        <Button
          onClick={handleAddCustomValue}
          title="Add Custom Value"
        />
      </div>
    </div>
  );
};

export default DisplayCounter;
