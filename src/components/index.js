import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col, Button, Card } from "reactstrap";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy
} from "react-scroll";
import { AnimateOnChange, HideUntilLoaded } from "react-animation";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import "./index.css";
import DrawerToggleButton from "./DrawerToggleButton";
// import Background from "../assets/background3.png";
import iconCard1 from "../assets/iconcard1.svg";
import iconCard2 from "../assets/iconcard2.png";
import iconCard3 from "../assets/iconcard3.svg";
import Playstore from "../assets/iOS.svg";
import google from "../assets/google.svg";
import easydispatchImag from "../assets/easydispatchImag.png";
import imagedownload from "../assets/imagedownload.png";
import chopameasy from "../assets/chopameasy.png";
import phoneShoe from "../assets/IMAGE.png";
import chopameasyg from "../assets/chopameasyg.png";
import easypaybg from "../assets/easypay logo2.svg";
import mainShoe from "../assets/mainShoe.png";
import watch from "../assets/mainWatch.png";
import headset from "../assets/mainHeadset.png";
import smartphone from "../assets/mainPhone.png";
import easypayImage from "../assets/easypayImage.png";
import shopeasyPhone from "../assets/shopeasyPhone.png";
import IMAGE from "../assets/IMAGE.png";
import dispatchLogo from "../assets/measyImage.png";
import easydispatch_logo from "../assets/easydispatch_logo.svg";
import easypaybg2 from "../assets/easypaybg2.png";
import dipatchbg from "../assets/dipatchbg.png";
import easypay_logo from "../assets/easypay logo2.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 400,
  arrows: false,
  dotsClass: "none",
  draggable: false
};
const words = ["building", "creating", "shaping", "moving into"];

const colours = ["#F4A41D", "#C62D42", "#F9F9F9"];
const randomColor = colours[Math.floor(Math.random() * 3)];
const Home = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [open, setOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("toolbar_navigation");
  const [logo, setLogo] = useState(easypaybg);
  const [showPops, setShowPops] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openLogo, setOpenLogo] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  const openToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    setNavOpen(navOpen);
  }, [navOpen]);

  const handleClose = () => {
    setNavOpen(false);
  };
  useEffect(() => {
    const listScrollEvent = e => {
      if (window.scrollY < 500) {
        setBackgroundColor("toolbar_navigation");
        setLogo(easypaybg);
      }
      if (window.scrollY > 350) {
        setBackgroundColor("toolbar_navigationB");
        setLogo(easypaybg);
      }
      if (window.scrollY > 1300) {
        setBackgroundColor("toolbar_navigation");
      }
      if (window.scrollY > 1650) {
        setBackgroundColor("toolbar_navigationB");
      }
      if (window.scrollY > 3000) {
        setBackgroundColor("toolbar_navigation");
        setLogo(dispatchLogo);
        setOpenLogo(true);
      }
      if (window.scrollY > 3500) {
        setBackgroundColor("toolbar_navigationB");
        setLogo(dispatchLogo);
      }
      if (window.scrollY > 5000) {
        setBackgroundColor("toolbar_navigationB");
        setLogo(dispatchLogo);
      }
      if (window.scrollY > 6000) {
        setBackgroundColor("toolbar_navigation");
      }
      if (window.scrollY > 6500) {
        setBackgroundColor("toolbar_navigationB");
      }
      if (window.scrollY > 8000) {
        setBackgroundColor("toolbar_navigation");
      }
      if (window.scrollY > 8000) {
        setLogo(easydispatch_logo);
      }
      if (window.scrollY > 8500) {
        setBackgroundColor("toolbar_navigationB");
      }
    };
    window.addEventListener("scroll", listScrollEvent);

    return () => {
      window.removeEventListener(listScrollEvent);
    };
  }, []);

  useEffect(() => {
    const listenScrollEvent = e => {
      if (window.scrollY > 500) {
        setShowPhone(true);
        setOpen(true);
      } else {
        setShowPhone(false);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [open]);

  useEffect(() => {
    setOpen(true);
    return () => {};
  }, [open]);

  const gotoTopArrow = () => {
    scroll.scrollToTop();
  };

  const gotoDownArrow = () => {
    scroll.scrollTo(2000);
    setOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPops(true);
    }, 9000);
    return () => {
      clearInterval(interval);
    };
  }, [showPops]);

  return (
    <div>
      <main className="mt-0">
        {navOpen === true && (
          <header className="mobileToolbar">
            <nav className="mobileToolbar__navigation" onClick={handleClose}>
              <div className="mobileToolbar_navigation-items">
                <ul>
                  <li>
                    <Link
                      activeClass="active"
                      className="test1 linkStyle"
                      to="test1"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test2 linkStyle"
                      to="test2"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      Easypay
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test3 linkStyle"
                      to="test3"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      Shopeasy
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test4 linkStyle"
                      to="test4"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      Chopameasy
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test5 linkStyle"
                      to="test5"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      Easydispatch
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test6 linkStyle CREATE"
                      to="test6"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={handleClose}
                    >
                      CREATE ACCOUNT
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )}
        <header className="toolbar">
          <nav className={backgroundColor}>
            <div className="toolbar_logo">
              <a href="/">
                <img src={logo} alt="easypay" width="100" />
              </a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    className="test1 linkStyle"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2 linkStyle"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Easypay
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3 linkStyle"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Shopeasy
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4 linkStyle"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Chopameasy
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test5 linkStyle"
                    to="test5"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Easydispatch
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test6 linkStyle button"
                    to="test6"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    CREATE ACCOUNT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="toolbar__toggle-button">
              {<DrawerToggleButton click={openToggle} />}
            </div>
          </nav>
        </header>
        <Jumbotron fluid className="topJumbotron" onClick={handleClose}>
          <Element name="test1" className="element">
            <Container className="firstContainer">
              <Row className="topHeader">
                <Col lg="6" xs="12" className="topColumn1 firstHeaderText">
                  <h1 className="topColumn1Text">
                    We are{" "}
                    <AnimateOnChange style={{ color: randomColor }}>
                      {words[current]}
                    </AnimateOnChange>
                  </h1>
                  <h1 className="topColumn1Text">the future.</h1>
                  <p className="topColumn1Text">See some of our Product</p>
                </Col>

                <Col lg="6" className="topColumn1" />
                <Col lg="12" className="scrollDiv">
                  <Slider {...settings} style={{ background: "black" }}>

                    <div>
                      <img
                        src={dipatchbg}
                        alt="dipatchbg"
                        className="scrollingLogo"
                      />
                    </div>
                    <div>
                      <img
                        src={easypaybg2}
                        alt="easypaybg2"
                        className="scrollingLogo"
                      />
                    </div>
                    <div>
                      <img
                        src={chopameasyg}
                        alt="dispatchLogo3"
                        className="scrollingLogo scrollingEasyPay"
                      />
                    </div>
                  </Slider>
                </Col>
              </Row>
            </Container>
          </Element>
        </Jumbotron>

        <Jumbotron className="secJumbotron">
          <Row>
            <Col className="aboutUs">
              <h1 className="EasyINC">About EasyINC</h1>
            </Col>
          </Row>
          <Col>
            <p className="test2Paragraph EasyINC">
              Easy Inc is a <em>combination</em> of upsteam commerce solutions{" "}
              <br />
              and downstream logistical service that’s technologically
              aggregated <br />
              to provide a seamless automated delivery experience.
            </p>
          </Col>
          <Row className="chevronIcon">
            <Col>
              <div class="arrow" onClick={gotoDownArrow}>
                <span />
                <span />
              </div>
            </Col>
          </Row>
        </Jumbotron>
        <Element name="test2" className="element">
          <Jumbotron className="thirdJumbotron">
            <Row>
              <Col lg="6" className="test3Column">
                <h2 className="text-white ml-5 thirdJumbotronText">
                  {" "}
                  easypay is free and easy to{" "}
                </h2>
                <h2 className="text-light ml-5 thirdJumbotronText">
                  use payment application.{" "}
                </h2>
                <p
                  className="text-light ml-5 mt-3 thirdJumbotronText "
                  id="byline"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Col>

              <Col lg="10" className="test4Column">
                <Container>
                  <Row>
                    <Col lg="12">
                      <div className="thirdJumbotronFeatures">
                        <h2 className="EasyINC">Features you’ll love</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                          <br />
                          elit Ut pretium pretium tempor.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="featuresCard">
                    <Col lg="4" className="colCard">
                      <LightSpeed left collapse when={open === true}>
                        <Card className=" shadow p-3 card1">
                          <div>
                            <img src={iconCard1} alt="icon1" width="80" />
                          </div>
                          <h4 className="cardTitle">
                            Simple & interactive design
                          </h4>
                          <p className="cardParagraph text-muted">
                            The fluid design is easy to use and keeps you glued
                            to your EasyDispatch apps
                          </p>
                        </Card>
                      </LightSpeed>
                    </Col>
                    <Col lg="4" className="colCard">
                      <Card className="shadow-sm p-3 card1">
                        <div>
                          <img src={iconCard2} alt="icon2" width="80" />
                        </div>
                        <h4 className=" cardTitle">Seamless Payment Process</h4>
                        <p className="cardParagraph text-muted">
                          easypay mobile application provides an unforgettable
                          user experience.
                        </p>
                      </Card>
                    </Col>
                    <Col lg="4" className="colCard">
                      <Card className="shadow-sm p-3 card1">
                        <div>
                          <img src={iconCard3} alt="icon3" width="80" />
                        </div>
                        <h4 className=" cardTitle">Secure Transactions</h4>
                        <p className="cardParagraph text-muted">
                          easypay users can make online transactionsbeing
                          confident that their funds are safe.
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Jumbotron>
        </Element>

        <Jumbotron className="TopeasyPayJumbotron">
          <Container>
            <Row>
              <Col sm="12" lg="6">
                <h1 className="easyTitle mb-3">easypay</h1>
                <p className="text-justify easypayParagraph mt-3 EasyINC payPara">
                  is a complete payment solution that bridges the gap between
                  online and peer to peer remote purchasers with subsequent
                  business/merchants, by breaking through the traditional
                  technological barriers to effect a seamless transactional
                  experience.
                </p>
              </Col>
              <Col sm="12" lg="6">
                <img
                  src={easypayImage}
                  alt="easypayImage"
                  className="easyLogo"
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Jumbotron className="simpleBgImage">
          <Container>
            <Row>
              <Col sm="12" lg="6" />
              <Col sm="12" lg="6">
                <h1 className="easyTitle EasyINC">
                  Simple & interactive design
                </h1>
                <p className="text-justify easypayParagraph EasyINC payPara">
                  The fluid design is easy to use and keeps you glued to your
                  easypay mobile application.
                </p>
              </Col>
            </Row>
            <Row className="EasyPaySocailmedia">
              <Col sm="12" className="EasyPay">
                <h1 className="easyTitle mt-3 text-white">Pay with EasyPay.</h1>
                <p className="text-justify text-white futurepayment payPara">
                  Basically if you want to experience the future of payment NOW.
                </p>
              </Col>
              <div className="d-flex">
                <div lg="4">
                  <img
                    src={Playstore}
                    alt="playstore"
                    width="100"
                    className="float-left Playstore"
                  />
                </div>
                <div lg="4">
                  <img
                    src={google}
                    alt="google"
                    width="100"
                    className="float-left"
                  />
                </div>
                {/* <div class ='spacer' /> */}
                <div lg="4">
                  <img
                    src={easypaybg}
                    alt="easypaybg"
                    width="100"
                    className="float-right logoRight"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron className="easyPayJumbotron">
          <Container />
        </Jumbotron>

        <Jumbotron className="easyPayJumbotron mb-5">
          <Container>
            <Row>
              <Col sm="12" className="phoneWatch">
                <img
                  src={headset}
                  alt="headset"
                  width="100"
                  className="headset"
                />
                <img src={watch} alt="watch" width="100" className="watch" />
                <img src={phoneShoe} alt="phoneShoe" className="phoneShoe" />
                <img src={mainShoe} alt="showPlay" className="shoe" />
                <img src={smartphone} alt="smartphone" className="smartphone" />
              </Col>
            </Row>

            <Row>
              <Col sm="12" className="buySell">
                <h1 className="easyColor chopeasyText">
                  We simply call it the best way to buy and
                </h1>
                <h1 className="easyColor chopeasyText">
                  sell from the comfort of where your are!
                </h1>
                <p className="text-muted chopeasyText">
                  Shopping just made easy with shopeasy.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Element name="test3" className="element">
          <Jumbotron className="topshopeasy">
            <Container>
              <Row>
                <Col sm="12" sm="6">
                  <img
                    src={shopeasyPhone}
                    alt="shopeasyPhone"
                    className="shopeasyPhone"
                  />
                </Col>

                <Col sm="12" sm="6">
                  <h5 className="easyTitle shopeasyFont">shopeasy</h5>
                  <p className="text-justify text-muted easypayParagraph mt-3 shopeasyFontletter">
                    Shopeasy is a Mobile App/Platform that provides an online
                    presence for merchants (from established retail outlets to
                    individuals) to showcase their products and service
                    potential customers.
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Element>

        <Jumbotron className="paymentJumbotron">
          <Container>
            <Row className="paymentRow">
              <Col lg="6" sm="12" className="paymentTopCol">
                <h5 className="easyTitle proceedtoPayment ">
                  Proceed to payment
                </h5>
                <p className="text-justify text-muted easypayParagraph shopeasyFontletter mt-3">
                  Seamlessly target value-added networks through timely
                  e-business. Competently reinvent sustainable action items via
                  distinctive technology. Assertively reintermediate
                  standardized solutions via proactive e-tailers. Proactively
                  optimize topline sources via orthogonal growth strategies.
                </p>
              </Col>

              <Col lg="6" sm="12">
                
                  
                    <img src={IMAGE} alt="IMAGE" className="IMAGE" />                
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Jumbotron className="convinceJumbotron">
          <Container>
            <Row className="convinceRow">
              <Col lg="6" sm="6">
                <span className="convince">Convince,</span>
                <span ml-3 className="signUp" style={{ color: "#1A81D6" }}>
                  Sign up
                </span>
              </Col>
              <Col
                lg="12"
                sm="8"
                md={{ size: 6, offset: 1 }}
                className="Download"
              >
                <Row>
                  <Col
                    lg="6"
                    sm="12"
                    className="text-white playGoogle playGoogleText "
                  >
                    Download to start <strong>Shopping</strong> :{" "}
                  </Col>
                  <Col lg="3" sm="6" xs="6">
                    <a href="/">
                      <img
                        src={google}
                        alt="google"
                        width="200"
                        className="float-left playGoogle"
                      />
                    </a>
                  </Col>
                  <Col lg="3" sm="6" xs="6">
                    <a href="/">
                      <img
                        src={Playstore}
                        alt="playstore"
                        width="200"
                        className="float-left playGoogle"
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Element name="test4" className="element">
          <Jumbotron className="chopmeasy deliciousMealImg">
            <Container className="">
              <Row className="chopmeasyText">
                <Col sm="12" className="chopmeasyText">
                  <h1 className="meal deliciousMeal">
                    Get your delicious meal
                  </h1>
                  <h1 className="meal deliciousMeal">
                    at your fingertip with chopameasy.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Col>
              </Row>

              <Row>
                <Row className="meatContainer">
                  <Col lg="6" sm="12" className="meatBox">
                    {/* <img src={meat} alt="meat" className="meat meatPlace" /> */}
                  </Col>
                  <Col lg="6" sm="12">
                    <h1 className="easyTitle mt-3">chopameasy</h1>
                    <p className="text-justify shopeasyFontletter easypayParagraph mt-5 ">
                      Online mobile food app that connects food <br /> vendors
                      restaurateurs with potential <br />
                      customers. Users have the opportunity to view
                      <br /> and order from a variety of food menus based <br />
                      on preferences or convenience.
                    </p>
                  </Col>

                  <Col lg="12" sm="12" className="getDelicious">
                    <div className="text-left">
                      <h1 className="">Get Delicious with ChopamEasy.</h1>
                      <p className="">
                        Buy delicious meal with ease using chopameasy app
                      </p>
                    </div>
                  </Col>
                  <Col lg="6" sm="12" className="mt-3">
                    <img
                      src={Playstore}
                      alt="playstore"
                      width="200"
                      className="float-left"
                    />
                  </Col>
                  <Col lg="6" sm="12" className="mt-3">
                    <img
                      src={chopameasy}
                      alt="chopameasy"
                      width="200"
                      className="float-right chopameasysocial"
                    />
                  </Col>
                </Row>
              </Row>
            </Container>
          </Jumbotron>
        </Element>

        <Element name="test5" className="element">
          <Jumbotron className="dispatchJumbotron">
            <Row className=" align-items-center dispatchRow">
              <Col lg="6">
                <h1 className="text-light logisticText">
                  Online logistic platform that manages on-demand
                </h1>
                <p className="text-light logisticPara">
                  Lorem ipsum dolor sit amet, consectetur elit.
                </p>
                <div className="d-flex flex-row">
                  <Col lg="6">
                    <img
                      src={Playstore}
                      alt="playstore"
                      width="200"
                      className="float-left mt-5"
                    />
                  </Col>
                  <Col lg="6">
                    <img
                      src={Playstore}
                      alt="playstore"
                      width="200"
                      className="float-left mt-5"
                    />
                  </Col>
                </div>
              </Col>
              <Col lg="6" sm="12">
                <img
                  src={easydispatchImag}
                  alt="easydispatchImag"
                  width="300"
                />
              </Col>
            </Row>
          </Jumbotron>
        </Element>
        <Element name="test6" className="element">
          <Jumbotron className="downloadJumbotron">
            <Row className=" doMoreRow">
              <Col lg="12">
                <h1 className="doMoreText">Do more with our app</h1>
                <p className="text-mute doMorePara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <p className="text-mute doMorePara">
                  elit. Ut pretium pretium tempor.
                </p>
              </Col>
              <Container>
                <Row className="align-items-center">
                  <Col lg="6" sm="12">
                    <h3 className="text-justify ml-5 Create_Account getPaired ">
                      Download and Create Account
                    </h3>
                    <p className="text-justify ml-5 Create_AccountText doMorePara">
                      {" "}
                      Seamlessly target value-added networks through timely{" "}
                      <br />
                      e-business. Competently reinvent sustainable action <br />
                      items via distinctive technology. Assertively
                      <br />
                      reintermediate standardized solutions via proactive <br />
                      e-tailers. Proactively optimize top-line sources via
                      <br />
                      orthogonal growth strategies.
                    </p>
                    <hr className="hrlineDispatch" />
                  </Col>
                  <Col lg="6" sm="12">
                    <img src={imagedownload} alt="imagedownload" width="400" />
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="align-items-center">
                  <Col lg="6" sm="12">
                    {showPhone === true && (
                      <Slide
                        left
                        effect="fadeInUp"
                        duration={3000}
                        forever={true}
                      >
                        <img
                          src={imagedownload}
                          alt="imagedownload"
                          width="400"
                        />
                      </Slide>
                    )}
                  </Col>
                  <Col lg="6" sm="12">
                    <h3 className="text-justify ml-5 Create_Account">
                      Request a Rider
                    </h3>
                    <p className="text-justify ml-5 Create_AccountText doMorePara">
                      {" "}
                      Seamlessly target value-added networks through timely{" "}
                      <br />
                      e-business. Competently reinvent sustainable action <br />
                      items via distinctive technology. Assertively
                      <br />
                      reintermediate standardized solutions via proactive <br />
                      e-tailers. Proactively optimize top-line sources via
                      <br />
                      orthogonal growth strategies.
                    </p>
                    <hr className="hrlineDispatch" />
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="align-items-center">
                  <Col lg="6" sm="12">
                    <h3 className="text-justify ml-5 Create_Account getPaired">
                      Get Paired with a rider
                    </h3>
                    <p className="text-justify ml-5 Create_AccountText doMorePara">
                      {" "}
                      Seamlessly target value-added networks through timely{" "}
                      <br />
                      e-business. Competently reinvent sustainable action <br />
                      items via distinctive technology. Assertively
                      <br />
                      reintermediate standardized solutions via proactive <br />
                      e-tailers. Proactively optimize top-line sources via
                      <br />
                      orthogonal growth strategies.
                    </p>
                    <hr className="hrlineDispatch" />
                  </Col>
                  <Col lg="6" sm="12">
                    <Slide bottom duration={3000} forever={true}>
                      <img
                        src={imagedownload}
                        alt="imagedownload"
                        width="400"
                      />
                    </Slide>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col lg="12" className="Create_Account">
                    <h1 className="Create_AccountText ">
                      We simply call it the best way to buy and
                    </h1>
                    <h1 className="Create_AccountText">
                      sell from the comfort of where your are!
                    </h1>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Jumbotron>
        </Element>

        <Container className="footer">
          <Row>
            <Col lg="3" sm="6" xs="6" className="">
              <div>
                <ul className="list-unstyled text-justify border-right">
                  <li className=" listTitle">NCK Technologies</li>
                  <li classNmae="footerlistText">
                    1221, Paelon Memorial Hospital
                  </li>
                  <li classNmae="footerlistText">hello@easydispatch.ng</li>
                  <li classNmae="footerlistText">+234 (0) 816 281 8379</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" sm="6" xs="6">
              <div>
                <ul className="list-unstyled text-justify border-right">
                  <li className=" listTitle">Innovation One Technologies</li>
                  <li classNmae="footerlistText">
                    1221, Paelon Memorial Hospital
                  </li>
                  <li classNmae="footerlistText">hello@easydispatch.ng</li>
                  <li classNmae="footerlistText">+234 (0) 816 281 8379</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" sm="6" xs="6">
              <div>
                <ul className="list-unstyled text-justify border-right">
                  <li className="listTitle">Legal</li>
                  <li classNmae="footerlistText">
                    1221, Paelon Memorial Hospital
                  </li>
                  <li classNmae="footerlistText">hello@easydispatch.ng</li>
                  <li classNmae="footerlistText">+234 (0) 816 281 8379</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" sm="6" xs="6">
              <div>
                <ul className="list-unstyled text-justify">
                  <li className="listTitle">Connect</li>
                  <li classNmae="footerlistText">
                    1221, Paelon Memorial Hospital
                  </li>
                  <li classNmae="footerlistText">hello@easydispatch.ng</li>
                  <li classNmae="footerlistText">+234 (0) 816 281 8379</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="text-right" onClick={gotoTopArrow}>
              Back To Top
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
export default Home;
