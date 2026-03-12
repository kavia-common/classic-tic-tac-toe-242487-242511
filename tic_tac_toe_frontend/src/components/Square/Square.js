import React from "react";
import "./Square.css";

/**
 * # PUBLIC_INTERFACE
 * Single board square button.
 */
export default function Square({
  value,
  onClick,
  isWinning = false,
  disabled = false,
  index,
}) {
  const ariaLabel = value ? `Square ${index + 1}, ${value}` : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={[
        "ttt-square",
        value ? "ttt-square--filled" : "",
        isWinning ? "ttt-square--winning" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className="ttt-square__value" aria-hidden="true">
        {value}
      </span>
    </button>
  );
}
