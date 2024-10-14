import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SearchPage from "./SearchPage";
import "./App.css";

const App = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [searchText, setSearchText] = useState("");

  const handleLogin = (info) => {
    setUserInfo(info);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <h2>Blog Post Website</h2>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home userInfo={userInfo} onSearch={handleSearch} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/search"
            element={<SearchPage searchText={searchText} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
