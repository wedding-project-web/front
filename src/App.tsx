import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import BridalRoomPage from "./pages/BridalRoomPage";
import MainPage from "./pages/MainPage";
import WeddingHallPage from "./pages/WeddingHallPage";

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/bridal" element={<BridalRoomPage />} />
            <Route path="/wedding-hall" element={<WeddingHallPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
