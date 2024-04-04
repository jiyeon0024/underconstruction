import { Zenitho } from "uvcanvas";
import UnderConstruction from "./components/UnderConstruction";
function App() {
  return (
    <div className="canvas">
      <Zenitho />
      <UnderConstruction />
      <div className="box"></div>
    </div>
  );
}

export default App;
