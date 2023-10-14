import { Routes, Route } from "react-router-dom";
import InboxPage from "./pages/InboxPage";
import TodayPage from "./pages/TodayPage";
import AnytimePage from "./pages/AnytimePage";
import UpcomingPage from "./pages/UpcomingPage";
import TrashPage from "./pages/TrashPage";
import LogbookPage from "./pages/LogbookPage";
import SomedayPage from "./pages/SomedayPage";
import { TodosProvider } from "./context/TodosContext";

function App() {
  return (
    <TodosProvider>
      <Routes>
        <Route path="/" element={<InboxPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/anytime" element={<AnytimePage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/someday" element={<SomedayPage />} />
        <Route path="/logbook" element={<LogbookPage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </TodosProvider>
  );
}

export default App;
