import "@styles/custom-scroll.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./providers/route";

function App() {
  return (
    <BrowserRouter basename="https://dotnamemush.github.io/flower-hub-clone/">
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
