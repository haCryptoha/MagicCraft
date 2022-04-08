import React from "react";
import ractangleImg from "../../assets/Rectangle 64-1.png";
import purpleImg from "../../assets/Rectangle 64-2.png";
import pinkImg from "../../assets/Rectangle 64-3.png";
import gunImg from "../../assets/Rectangle 64.png";
import "./Properties.css";
const Properties = () => {
  return (
    <div>
      <section className="properties-section container">
        <h3 className="property-title mb-5">PROPERTIES</h3>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="property-box">
              <div className="property-img-container">
                <img className="author-img" src={pinkImg} alt="" />
              </div>
              <div>
                <span className="property-text-1">background</span>
                <h6 className="property-text-2">PURPLE</h6>
                <span className="property-text-3">2% have the same</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="property-box">
              <div className="property-img-container">
                <img className="author-img" src={purpleImg} alt="" />
              </div>
              <div>
                <span className="property-text-1">Pink</span>
                <h4 className="property-text-2">Gem</h4>
                <span className="property-text-3">2% have the same</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="property-box">
              <div className="property-img-container">
                <img className="author-img" src={ractangleImg} alt="" />
              </div>
              <div>
                <span className="property-text-1">Amored</span>
                <h4 className="property-text-2">Race</h4>
                <span className="property-text-3">2% have the same</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="property-box">
              <div className="property-img-container">
                <img className="author-img" src={gunImg} alt="" />
              </div>
              <div>
                <span className="property-text-1">Magic</span>
                <h4 className="property-text-2">Weapon</h4>
                <span className="property-text-3">2% have the same</span>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="property-box">
              <div className="property-img-container">
                <img className="author-img" src={gunImg} alt="" />
              </div>
              <div>
                <span className="property-text-1">Magic Sword</span>
                <h4 className="property-text-2">Weapon</h4>
                <span className="property-text-3">2% have the same</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Properties;
