import React from "react";
import PerfectScrollbar from "perfect-scrollbar";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components

import axios from "axios";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

// let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  const [queryUserFullName, setQueryUserFullName] = React.useState("");
  const [queryUserEmail, setQueryUserEmail] = React.useState("");
  const [queryUserPhoneNumber, setQueryUserPhoneNumber] = React.useState("");
  const [queryUserCompany, setQueryUserCompany] = React.useState("");
  const [queryUserMessage, setQueryUserMessage] = React.useState("");

  const sendUserQuery = async () => {
    console.log("sendUserQuery Handler initialted.");
    await axios
      .post("http://localhost:3001/contact-us", {
        obj: {
          name: queryUserFullName,
          email: queryUserEmail,
          company: queryUserCompany,
          contact: queryUserPhoneNumber,
          query: queryUserMessage,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          clearFormData();
          window.location.reload();
        } else {
          alert("Please check your input values!");
        }
      });
  };
  const clearFormData = () => {
    setQueryUserFullName("");
    setQueryUserEmail("");
    setQueryUserPhoneNumber("");
    setQueryUserCompany("");
    setQueryUserMessage("");
  };
  //  React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }
  //   document.body.classList.toggle("profile-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.documentElement.className += " perfect-scrollbar-off";
  //       document.documentElement.classList.remove("perfect-scrollbar-on");
  //     }
  //     document.body.classList.toggle("profile-page");
  //   };
  // }, []);

  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }
  //   document.body.classList.toggle("profile-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.documentElement.className += " perfect-scrollbar-off";
  //       document.documentElement.classList.remove("perfect-scrollbar-on");
  //     }
  //     document.body.classList.toggle("profile-page");
  //   };
  // }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          {/* <Container className="align-items-center"> */}
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <h1 className="profile-title text-left">
                  Software Engineering
                </h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel
                    items={[
                      {
                        src: require("assets/img/web-development-isometric-concept-composition-illustration_1284-55922 (1).avif"),
                      },
                    ]}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input
                              type="text"
                              required
                              value={queryUserFullName}
                              placeholder="Full Name"
                              onChange={(e) =>
                                setQueryUserFullName(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input
                              type="email"
                              value={queryUserEmail}
                              placeholder="Email Details"
                              onChange={(e) =>
                                setQueryUserEmail(e.target.value)
                              }
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input
                              type="text"
                              value={queryUserPhoneNumber}
                              placeholder="Contact Details"
                              onChange={(e) =>
                                setQueryUserPhoneNumber(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company/Student</label>
                            <Input
                              type="text"
                              value={queryUserCompany}
                              placeholder="Company Name"
                              onChange={(e) =>
                                setQueryUserCompany(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input
                              type="text"
                              value={queryUserMessage}
                              placeholder="Message"
                              onChange={(e) =>
                                setQueryUserMessage(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        onClick={sendUserQuery}
                      >
                        Send Query.
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
