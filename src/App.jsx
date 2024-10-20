import Landing from "./components/Landing";
import History from "./components/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./components/Layout/LandingLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define routes inside LandingLayout */}
          <Route path="/" element={<LandingLayout />}>
            <Route path="/" element={<Landing />} />
            {/* Add History route here */}
            <Route path="/History" element={<History />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
