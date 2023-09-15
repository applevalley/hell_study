import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Picture from "./ManagingState/ReactingToInputWithState/picture";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/3-1" element={<Picture />} />
      </Routes>
    </Router>
  );
}

export default App;
