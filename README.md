# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

-- How components, props and state are working in this app?

In the Tic-Tac-Toe game, the Game component acts as the main controller, managing the game's history and the current move using the history and currentMove state variables. It passes down the current board state (squares) and a function (onPlay) as props to the Board component. The Board component, in turn, determines the game's status (winner or next player) and renders individual Square components. Each Square receives its value and a click handler as props, allowing the board to update when a player makes a move. This is how components, props, and state work together in this app.
