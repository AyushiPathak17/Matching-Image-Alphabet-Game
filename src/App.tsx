import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";
import IntroScreen1 from "./pages/IntroScreen1";
import IntroScreen2 from "./pages/IntroScreen2";
import InstructionScreen from "./pages/InstructionScreen";
import ActivityScreen from "./pages/ActivityScreen";
import ActivityScreen1 from "./pages/ActivityScreen1";
import ActivityScreen11 from "./pages/ActivityScreen11";
import ActivityScreen2 from "./pages/ActivityScreen2";
import ActivityScreen3 from "./pages/ActivityScreen3";
import ActivityScreen4 from "./pages/ActivityScreen4";
import ActivityScreen5 from "./pages/ActivityScreen5";
import ActivityScreen12 from "./pages/ActivityScreen12";
import ActivityScreen21 from "./pages/ActivityScreen21";
import FinalRewardsScreen from "./pages/FinalRewardsScreen";

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
      case "/intro-screen":
        title = "";
        metaDescription = "";
        break;
      case "/intro-screen1":
        title = "";
        metaDescription = "";
        break;
      case "/instruction-screen":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen1":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen2":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen3":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen4":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen8":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen7":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen6":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen5":
        title = "";
        metaDescription = "";
        break;
      case "/final-rewards-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/intro-screen" element={<IntroScreen1 />} />
      <Route path="/intro-screen1" element={<IntroScreen2 />} />
      <Route path="/instruction-screen" element={<InstructionScreen />} />
      <Route path="/activity-screen" element={<ActivityScreen />} />
      <Route path="/activity-screen1" element={ <ActivityScreen1 />} />
      <Route path="/activity-screen2" element={ <ActivityScreen11 />} />
      <Route path="/activity-screen3" element={ <ActivityScreen2 />} />
      <Route path="/activity-screen4" element={ <ActivityScreen3 />} />
      <Route path="/activity-screen5" element={ <ActivityScreen5 />} />
      <Route path="/activity-screen6" element={ <ActivityScreen12 />} />
      <Route path="/activity-screen7" element={ <ActivityScreen21 />} />
      <Route path="/activity-screen8" element={ <ActivityScreen4 />} />
      <Route path="/final-rewards-screen" element={<FinalRewardsScreen />} />
    </Routes>
  );
}
export default App;
