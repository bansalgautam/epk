import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Pass from "./pages/Pass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
