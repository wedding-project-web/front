import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Layout from "./components/common/Layout";
import AboutUsPage from "./pages/AboutUsPage";
import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/ReservationPage";
import SpecialWeddingPromotion from "./pages/SpecialWeddingPromotion";
import SpecialWeddingPromotionDetailPage from "./pages/SpecialWeddingPromotionDetailPage";
import WeddingAndPartyPage from "./pages/WeddingAndPartyPage";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <main className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
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
                <Route
                  path="/wedding-promotion-detail"
                  element={<SpecialWeddingPromotionDetailPage />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </main>
  );
};

export default App;
