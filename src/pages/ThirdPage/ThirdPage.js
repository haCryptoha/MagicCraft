import React from "react";
import DropsForm from "../DropsForm/DropsForm";
import LstNew from "../LstNew/LstNew";
import Footer from "../Shared/Footer";
import ThirdBanner from "../ThirdBanner/ThirdBanner";
import Trending from "../Trending/Trending";

const ThirdPage = () => {
  return (
    <div>
      <ThirdBanner />
      <Trending />
      <DropsForm />
      <LstNew />

      <Footer />

    </div>
  );
};

export default ThirdPage;
