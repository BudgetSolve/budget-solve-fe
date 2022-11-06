import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import TeamPage from "./pages/TeamPage/TeamPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
