
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingLayout from "./components/Layout/LandingLayout";
function App() {
  return (
    <>
      

      <Router>
        <Routes>
        <Route path="/" element={<LandingLayout />}>
					<Route path="/" element={<Landing />} />
					
				</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
