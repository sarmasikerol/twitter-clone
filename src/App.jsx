import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<h1>Profil Page</h1>} />
          <Route path="/ayar" element={<h1>Ayar Page</h1>} />
          <Route path="/arkadaş" element={<h1>Arkadaş Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Title = ({ children }) => {
  <h1 className="text-3xl text-center my-20">{children}</h1>;
};

export default App;
