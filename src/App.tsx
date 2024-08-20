import "@styles/custom-scroll.css";
import { HashRouter } from "react-router-dom";
import MainRoutes from "./providers/route";

function App() {
  return (
    <HashRouter>
      <MainRoutes />
    </HashRouter>
  );
}

export default App;
