import "./App.css";
import { useState } from "react";
import FirstPage from "./pages/FirstPage/FirstPage";
import Header from "./pages/Header/Header";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import Staking from "./pages/Staking/Staking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VStaking from "./pages/VStaking";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  return (
    <BrowserRouter>
      <Header setCurrentAccount={setCurrentAccount} />
      <Routes>
        {/* <Route path="/" element={<SecondPage />}></Route> */}
        {/* <Route path="/marketplace" element={<FirstPage />}></Route> */}
        {/* <Route path="/buynow" element={<ThirdPage />}></Route> */}
        {/* <Route
          path="/staking"
          element={<Staking walletAddress={currentAccount} />}
        ></Route> */}
        <Route path="/staking" element={<VStaking walletAddress={currentAccount} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
