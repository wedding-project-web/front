import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import MainPage from "./pages/MainPage";
import SpecialWeddingPromotionPage from "./pages/SpecialWeddingPromotionPage";
import WeddingAndPartyPage from "./pages/WeddingAndPartyPage";

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/wedding-hall" element={<WeddingAndPartyPage />} />
            <Route
              path="/wedding-promotion"
              element={<SpecialWeddingPromotionPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
