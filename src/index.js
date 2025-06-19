import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello Pizza</h1>;
}

// React v18 - this is how we render App
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//StrictMode helps us render our app twice and check for Bugs and if we're using outdated parts of the React API