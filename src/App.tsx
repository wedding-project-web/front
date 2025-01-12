import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/ReservationPage";
import WeddingAndPartyPage from "./pages/WeddingAndPartyPage";
import AboutUsPage from "./pages/AboutUsPage";
import SpecialWeddingPromotion from "./pages/SpecialWeddingPromotion";

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/wedding-hall" element={<WeddingAndPartyPage />} />

            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route
              path="/wedding-promotion"
              element={<SpecialWeddingPromotion />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
