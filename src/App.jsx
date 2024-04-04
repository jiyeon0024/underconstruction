import { Zenitho } from "uvcanvas";
import UnderConstruction from "./components/UnderConstruction";
import React, { Suspense } from "react";
import "./i18n";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="canvas">
        <Zenitho />
        <UnderConstruction />

        <div className="box"></div>
      </div>
    </Suspense>
  );
}

export default App;
