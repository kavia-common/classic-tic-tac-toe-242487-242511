import React from "react";
import "./Controls.css";

/**
 * # PUBLIC_INTERFACE
 * Game controls (restart).
 */
export default function Controls({ onRestart }) {
  return (
    <div className="ttt-controls">
      <button type="button" className="ttt-btn ttt-btn--primary" onClick={onRestart}>
        Restart game
      </button>
      <p className="ttt-controls__meta">
        Local two-player game (X vs O) — play on the same device.
      </p>
    </div>
  );
}
