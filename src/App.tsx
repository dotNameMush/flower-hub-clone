import "@styles/custom-scroll.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./providers/route";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
