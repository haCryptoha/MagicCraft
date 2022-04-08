import React from "react";
import { Link } from "react-router-dom";
import authorLogo from "../../assets/image 6-1.png";
import sellerLogo from "../../assets/image 6.png";

import image from "../../assets/unsplash_ExarETx4xNA.png";
import twitterLogo from "../../assets/Vector.png";
import Properties from "../Properties/Properties";
import Footer from "../Shared/Footer";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div>
      <div className="second-page-container">
        {/* upper container  */}
        <section className="upper-section container">
          <div className="row g-4">
            <div className="col-md-4 image-box">
              <img className="img-fluid ban-img" src={image} alt="" />
            </div>
            <div className="col-md-4 buying-box px-4">
              <h2>
                BOTHERED OTTERS <br />
                GOLDEN TICKETS
              </h2>
              <p className="date">Date of Creation: 20.02.2022</p>
              <h4>0.02MCRT</h4>
              <h6 className="des">
                Pellentesque neque risus, auctor as nisl in, dictum rhoncus
                libero. Cras eget rhoncus dolor, commodo pharetra leo,
                Pelletesque neque risus, apharetra leo. Pellentesqureetra leo.
              </h6>
              <div className="price-box">
                <span className="span-1">77,789</span>
                <span className="span-2">77,789</span>
              </div>
              <div className="count-box">
                <span>Axie #4567892</span>
                <span>Bread Count: 67</span>
              </div>
              <button className="buy-button">
                <Link className="text-decoration-none text-white" to="/buynow">
                  BUY NFT
                </Link>
              </button>
            </div>
            <div className="col-md-4">
              <div className="author-box">
                <h4>AUTHOR</h4>
                <div className="author-card">
                  <div>
                    <img className="author-img" src={authorLogo} alt="" />
                  </div>
                  <div>
                    <p className="author-social-name-1">@spicedao</p>
                    <p className="author-social-name-2">dune.foundation</p>
                    <span className="author-social-name-3">
                      <img src={twitterLogo} alt="" /> @TheSpiceDAO
                    </span>
                  </div>
                </div>
              </div>
              <div className="author-box">
                <h4>SELLER</h4>
                <div style={{ background: "#291D72" }} className="author-card">
                  <div>
                    <img className="author-img" src={sellerLogo} alt="" />
                  </div>
                  <div>
                    <p className="author-social-name-1">@spicedao</p>
                    <p className="author-social-name-2">dune.foundation</p>
                    <span className="author-social-name-3">
                      <img src={twitterLogo} alt="" /> @TheSpiceDAO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* property section  */}
      <Properties></Properties>
      {/* description section */}
      <section className="container  description-container">
        <h4 className="description-title">DESCRIPTION</h4>
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="article-header">
              SED LAOREET URNA AC MAGNA PORTA VIVERRA
            </h5>
            <p className="description-paragraph">
              Aliquam risus est, feugiat id nulla sit amet, imperdiet tristique
              mauris. Aliquam vitae magna dictum, tristique lorem in, lacinia
              nisl. Mauris finibus consectetur tellus eget lacinia. Nam sit amet
              sapien et orci ultrices ullamcorper ut non elit. Proin dictum
              varius ultrices. Donec venenatis sem arcu, nec efficutur massa
              volutpat semper. Proin mauris enim, sagittis vel turpis
              ullamcorper, facilisit auctor felis Morbi nisi orci, pulvinar vel
              nibh id viverrra volutpat nigh. Suspendisse lobortis dui ut neque
              alique semper eu et augue. Sed aliquam semeper justo, vel
              facilisis ipsum venenatis quis turpis in cursus. Donec aliquet
              tortor purus, et wuscipit risus vestibulum quis
            </p>
            <p className="description-paragraph">
              Maecenas euismod ultricies consectetur. Proin feugiat dictum
              sodales. Quisque a congue tellus, et bitendum neque. Phasellus sed
              dui mollis, facilisis massa in, cursus nibh Donec elementum,
              sapien non placerat facilisis, erat mi maximus magna, at cursus
              ipsum liula sed turpis , Integer vestibulum at velit quis dictum .
              Donec condimentum placerat nisi ac hendrerit. Suspendisse potenti.
              Donec sed iaculis nisl. Sed posure a neque non tristique
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="article-header">
              SED LAOREET URNA AC MAGNA PORTA VIVERRA
            </h5>
            <p className="description-paragraph">
              Aliquam risus est, feugiat id nulla sit amet, imperdiet tristique
              mauris. Aliquam vitae magna dictum, tristique lorem in, lacinia
              nisl. Mauris finibus consectetur tellus eget lacinia. Nam sit amet
              sapien et orci ultrices ullamcorper ut non elit. Proin dictum
              varius ultrices. Donec venenatis sem arcu, nec efficutur massa
              volutpat semper. Proin mauris enim, sagittis vel turpis
              ullamcorper, facilisit auctor felis Morbi nisi orci, pulvinar vel
              nibh id viverrra volutpat nigh. Suspendisse lobortis dui ut neque
              alique semper eu et augue. Sed aliquam semeper justo, vel
              facilisis ipsum venenatis quis turpis in cursus. Donec aliquet
              tortor purus, et wuscipit risus vestibulum quis
            </p>
            <p className="description-paragraph">
              Maecenas euismod ultricies consectetur. Proin feugiat dictum
              sodales. Quisque a congue tellus, et bitendum neque. Phasellus sed
              dui mollis, facilisis massa in, cursus nibh Donec elementum,
              sapien non placerat facilisis, erat mi maximus magna, at cursus
              ipsum liula sed turpis , Integer vestibulum at velit quis dictum .
              Donec condimentum placerat nisi ac hendrerit. Suspendisse potenti.
              Donec sed iaculis nisl. Sed posure a neque non tristique
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="article-header">
              SED LAOREET URNA AC MAGNA PORTA VIVERRA
            </h5>
            <p className="description-paragraph">
              Aliquam risus est, feugiat id nulla sit amet, imperdiet tristique
              mauris. Aliquam vitae magna dictum, tristique lorem in, lacinia
              nisl. Mauris finibus consectetur tellus eget lacinia. Nam sit amet
              sapien et orci ultrices ullamcorper ut non elit. Proin dictum
              varius ultrices. Donec venenatis sem arcu, nec efficutur massa
              volutpat semper. Proin mauris enim, sagittis vel turpis
              ullamcorper, facilisit auctor felis Morbi nisi orci, pulvinar vel
              nibh id viverrra volutpat nigh. Suspendisse lobortis dui ut neque
              alique semper eu et augue. Sed aliquam semeper justo, vel
              facilisis ipsum venenatis quis turpis in cursus. Donec aliquet
              tortor purus, et wuscipit risus vestibulum quis
            </p>
            <p className="description-paragraph">
              Maecenas euismod ultricies consectetur. Proin feugiat dictum
              sodales. Quisque a congue tellus, et bitendum neque. Phasellus sed
              dui mollis, facilisis massa in, cursus nibh Donec elementum,
              sapien non placerat facilisis, erat mi maximus magna, at cursus
              ipsum liula sed turpis , Integer vestibulum at velit quis dictum .
              Donec condimentum placerat nisi ac hendrerit. Suspendisse potenti.
              Donec sed iaculis nisl. Sed posure a neque non tristique
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="article-header">
              SED LAOREET URNA AC MAGNA PORTA VIVERRA
            </h5>
            <p className="description-paragraph">
              Aliquam risus est, feugiat id nulla sit amet, imperdiet tristique
              mauris. Aliquam vitae magna dictum, tristique lorem in, lacinia
              nisl. Mauris finibus consectetur tellus eget lacinia. Nam sit amet
              sapien et orci ultrices ullamcorper ut non elit. Proin dictum
              varius ultrices. Donec venenatis sem arcu, nec efficutur massa
              volutpat semper. Proin mauris enim, sagittis vel turpis
              ullamcorper, facilisit auctor felis Morbi nisi orci, pulvinar vel
              nibh id viverrra volutpat nigh. Suspendisse lobortis dui ut neque
              alique semper eu et augue. Sed aliquam semeper justo, vel
              facilisis ipsum venenatis quis turpis in cursus. Donec aliquet
              tortor purus, et wuscipit risus vestibulum quis
            </p>
            <p className="description-paragraph">
              Maecenas euismod ultricies consectetur. Proin feugiat dictum
              sodales. Quisque a congue tellus, et bitendum neque. Phasellus sed
              dui mollis, facilisis massa in, cursus nibh Donec elementum,
              sapien non placerat facilisis, erat mi maximus magna, at cursus
              ipsum liula sed turpis , Integer vestibulum at velit quis dictum .
              Donec condimentum placerat nisi ac hendrerit. Suspendisse potenti.
              Donec sed iaculis nisl. Sed posure a neque non tristique
            </p>
          </div>
        </div>
      </section>
      <div className="footban1">

      </div>


      <Footer />

    </div>
  );
};

export default SecondPage;
