import React from "react";
import { Button, Card, Col, Dropdown, DropdownButton, FormControl, InputGroup, Row } from "react-bootstrap";
import m1 from "../../assets/m1.png";
import di1 from "../../assets/di1.png";
import dr1 from "../../assets/dr1.png";
import arm from "../../assets/arm.png";
import Footer from "../../pages/Shared/Footer";
import dwnarr from '../../assets/arrd.png'
import git from "../../assets/git.png";
import wiz from "../../assets/wiz.png";
import updownarr from "../../assets/updownarr.png";
import "./FirstMenu.css";
import Pagination from "../Pagination/Pagination";
import FootBan from "../FootBan/FootBan";
import { Link } from "react-router-dom";

const FirstMenuBody = () => {
  return (
    <div>
      <Row className="mb-4 "  >
        <Col xs={12} md={3}  >
          <div className="accordion scroll" id="accordionPanelsStayOpenExample ">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  <h6>TYPE OF HEROS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex distanF gap-1 mt-4 justify-content-evenly align-items-center">
                    <img className="typeImg" src={di1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DISTANCE FIGHTER
                    </p>
                  </button>
                  <button className="d-flex druios mt-4 gap-1 align-items-center">
                    <img className="typeImg" src={dr1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DRUIOS
                    </p>
                  </button>
                </div>
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={arm} alt="" />
                    <p className="text-white typeFont mt-3">
                      ARMORED
                    </p>
                  </button>
                  <button className="d-flex gap-1 druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={wiz} alt="" />
                    <p className="text-white typeFont mt-3">
                      WIZARDS
                    </p>
                  </button>
                  <button className="d-flex gap-1  druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={git} alt="" />
                    <p className="text-white typeFont mt-3">
                      HARMONY
                    </p>
                  </button>
                </div>

                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={di1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DISTANCE FIGHTER
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={dr1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DRUIOS
                    </p>
                  </button>
                </div>
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex druios gap-1 mt-2 mb-4 justify-content-evenly align-items-center">
                    <img className="typeImg" src={arm} alt="" />
                    <p className="text-white typeFont mt-3">
                      ARMORED
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={wiz} alt="" />
                    <p className="text-white typeFont mt-3">
                      WIZARDS
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={git} alt="" />
                    <p className="text-white typeFont mt-3">
                      HARMONY
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <h6>WEAPONS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex distanF mt-4 justify-content-evenly align-items-center">
                    <img className="typeImg" src={di1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DISTANCE FIGHTER
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-4 gap-2 align-items-center">
                    <img className="typeImg" src={dr1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DRUIOS
                    </p>
                  </button>
                </div>
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex gap-1 druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={arm} alt="" />
                    <p className="text-white typeFont mt-3">
                      ARMORED
                    </p>
                  </button>
                  <button className="d-flex gap-1 druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={wiz} alt="" />
                    <p className="text-white typeFont mt-3">
                      WIZARDS
                    </p>
                  </button>
                  <button className="d-flex gap-1  druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={git} alt="" />
                    <p className="text-white typeFont mt-3">
                      HARMONY
                    </p>
                  </button>
                </div>

                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex gap-1 druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={di1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DISTANCE FIGHTER
                    </p>
                  </button>
                  <button className="d-flex gap-1 druios mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={dr1} alt="" />
                    <p className="text-white typeFont mt-3">
                      DRUIOS
                    </p>
                  </button>
                </div>
                <div className="d-flex gap-2 flexCol ms-2">
                  <button className="d-flex druios gap-1 mt-2 mb-4 justify-content-evenly align-items-center">
                    <img className="typeImg" src={arm} alt="" />
                    <p className="text-white typeFont mt-3">
                      ARMORED
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={wiz} alt="" />
                    <p className="text-white typeFont mt-3">
                      WIZARDS
                    </p>
                  </button>
                  <button className="d-flex druios gap-1 mt-2 justify-content-evenly align-items-center">
                    <img className="typeImg" src={git} alt="" />
                    <p className="text-white typeFont mt-3">
                      HARMONY
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <h6>EQUIPMENTS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="d-flex gap-4 ms-2">
                  <div className="d-flex gap-4 petSec ms-4 mt-4 mb-4">
                    <div className="d-flex justify-content-between equip align-items-center">
                      <InputGroup size="sm" className="mb-3">
                        <FormControl defaultValue={"4334"} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                      </InputGroup>
                      <Link to="#up"> <img style={{ width: '20px', marginTop: '-16px' }} src={updownarr} alt="" /></Link>

                    </div>
                    <div className="d-flex justify-content-between equip align-items-center">
                      <InputGroup size="sm" className="mb-3">
                        <FormControl defaultValue={"4334"} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                      </InputGroup>
                      <Link to="#up"> <img style={{ width: '20px', marginTop: '-16px' }} src={updownarr} alt="" /></Link>

                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <h6>PETS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">

                <div className="d-flex petSec mb-2">
                  <button className="text-white ms-2  mt-4 pets text-center">2006</button>
                  <button className="text-white ms-2  mt-4 pets text-center">2007</button>
                  <button className="text-white ms-2  mt-4 pets text-center">2008</button>
                  <button className="text-white ms-2  mt-4 pets text-center">2009</button>
                </div>
                <div className="d-flex petSec mb-2">
                  <button className="text-white ms-2 pets text-center">2010</button>
                  <button className="text-white ms-2 pets text-center">2011</button>
                  <button className="text-white ms-2 pets text-center">2012</button>
                  <button className="text-white ms-2 pets text-center">2013</button>
                </div>
                <div className="d-flex petSec mb-2">
                  <button className="text-white ms-2 pets text-center">2014</button>
                  <button className="text-white ms-2 pets text-center">2015</button>
                  <button className="text-white ms-2 pets text-center">2016</button>
                  <button className="text-white ms-2 pets text-center">2017</button>
                </div>
                <div className="d-flex petSec  mb-2 ">
                  <button className="text-white ms-2 pets text-center">2018</button>
                  <button className="text-white ms-2 pets text-center">2019</button>
                  <button className="text-white ms-2 pets text-center">2020</button>
                  <button className="text-white ms-2 pets text-center">2021</button>
                </div>
                <div className="d-flex petSec ">
                  <button className="text-white ms-2 mb-2 pets text-center">2022</button>
                </div>
              </div>
            </div>

          </div>
        </Col>
        <Col md={9} className=" secondCol"  >
          <Row className=" mt-2 container mb-2">
            <Col>
              <h4 className="text-white mt-4"> MARKET PLACE</h4>
            </Col>
            <Col className="d-flex align-items-center gap-2 mt-4  justify-content-end ">
              <p style={{ fontSize: '12px' }} className="text-white my-2">SORT BY</p>
              <Dropdown>
                <Dropdown.Toggle className="equipment text-white" id="dropdown-basic">
                  EQUIPMENT
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className="equipment text-white" id="dropdown-basic">
                  Date
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <div className=" ">
            <Row xs="auto" >

              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4  cardMargin">
                <Card className="cardwid border-0" style={{ width: "10rem" }}>
                  <Link to="/"><Card.Img variant="top" src={m1} /></Link>                  <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                    <Card.Title
                      style={{ fontSize: "12px" }}
                      className="text-white"
                    >
                      ConstitutionDAO
                    </Card.Title>
                    <Card.Text style={{ fontSize: "8px", color: "#7183AF" }}>
                      @ConstitutionDAO
                    </Card.Text>
                    <div className="d-flex gap-2 mcrt1">
                      <Card.Text
                        style={{ fontSize: "8px" }}
                        className="text-warning"
                      >
                        0.02 MCRT
                      </Card.Text>
                      <p style={{ color: "#7183AF", fontSize: "8px" }}>
                        $879.78
                      </p>
                    </div>
                    <div
                      className="d-flex gap-2 axies1"
                      style={{ fontSize: "8px", color: "#7183AF" }}
                    >
                      <small>Axie #4567892 </small>
                      <small>|</small>
                      <small> Bread Count : 67</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
            <Pagination />
          </div>

          <div className=" " style={{ borderTop: '4px solid' }}>
            <FootBan />
            <Footer />
          </div>
        </Col>

      </Row >
    </div >
  );
};

export default FirstMenuBody;
