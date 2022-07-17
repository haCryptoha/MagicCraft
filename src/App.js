 import { useState, useEffect } from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { useWeb3React } from '@web3-react/core'

import getRpcUrl from "./utils/getRpcUrl";

import Header from "./pages/Header/Header";
import VStaking from "./pages/VStaking";

import "./App.css";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  //TODO: 
  // const { account, connect } = bsc.useWallet();
  const { account } = useWeb3React()

  // useEffect(() => {
  //   if (!account) {
  //     connect("injected");
  //   }
  // }, [account, connect]);

  return (
    <BrowserRouter>
      <Header setCurrentAccount={setCurrentAccount} />
      <Routes>
        <Route path="/staking" element={<VStaking walletAddress={account} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
