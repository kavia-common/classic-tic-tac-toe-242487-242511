import React, { useEffect, useState } from "react";
import Game from "./features/game/Game";
import "./App.css";

/**
 * # PUBLIC_INTERFACE
 * App shell for the Tic Tac Toe frontend.
 * Provides layout and theme variables via data-theme.
 */
function App() {
  const [theme, setTheme] = useState("soft-gray");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  function toggleTheme() {
    setTheme((t) => (t === "soft-gray" ? "soft-gray-dark" : "soft-gray"));
  }

  return (
    <div className="App">
      <div className="ttt-app">
        <header className="ttt-header">
          <button
            type="button"
            className="ttt-btn ttt-btn--ghost"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "soft-gray" ? "dark" : "light"} mode`}
          >
            {theme === "soft-gray" ? "Dark mode" : "Light mode"}
          </button>
        </header>

        <section className="ttt-shell">
          <Game />
        </section>

        <footer className="ttt-footer">
          <span>Retro Tic Tac Toe • Soft Gray</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
