import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Components
import App from "../App";
import CreatePlayer from "../screens/CreatePlayer";
import Rules from "../screens/Rules";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create_player" element={<CreatePlayer />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
