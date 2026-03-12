import React from "react";
import "./StatusPanel.css";

/**
 * # PUBLIC_INTERFACE
 * Displays current game status: next player, winner, draw.
 */
export default function StatusPanel({ currentPlayer, winner, isDraw }) {
  let title = `Next player: ${currentPlayer}`;
  let subtitle = "Tap an empty square to place your mark.";

  if (winner) {
    title = `Winner: ${winner}`;
    subtitle = "Winning line highlighted in green.";
  } else if (isDraw) {
    title = "Draw!";
    subtitle = "No more moves — restart to play again.";
  }

  return (
    <section className="ttt-status" aria-live="polite" aria-atomic="true">
      <h1 className="ttt-status__title">Tic Tac Toe</h1>
      <div className="ttt-status__card">
        <div className="ttt-status__row">
          <span className="ttt-status__label">Status</span>
          <span className="ttt-status__value">{title}</span>
        </div>
        <p className="ttt-status__hint">{subtitle}</p>
      </div>
    </section>
  );
}
