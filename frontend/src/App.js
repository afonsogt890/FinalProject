import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import SettingsMainPage from "./pages/SettingsMainPage";
import SettingsMyGamesSection from "./pages/SettingsMyGamesSection";
import Login from "./pages/Login";
import PageGames from "./pages/PageGames";
import UsersGame from "./pages/UsersGame";
import UserProfile from "./pages/UserProfile";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/settings-main-page":
        title = "";
        metaDescription = "";
        break;
      case "/settings-mygames-section":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/page-games":
        title = "";
        metaDescription = "";
        break;
      case "/users-game":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/terms-of-service":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/settings-main-page" element={<SettingsMainPage />} />
      <Route
        path="/settings-mygames-section"
        element={<SettingsMyGamesSection />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/page-games" element={<PageGames />} />
      <Route path="/users-game" element={<UsersGame />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
export default App;
