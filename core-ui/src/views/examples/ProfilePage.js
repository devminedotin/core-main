import React from "react";
import "../../assets/css/custom.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components

import axios from "axios";
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption:
      "Devmine's software is a game-changer! We're impressed with their innovative approach and dedicated customer support.",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption:
      "Kudos to Devmine for their exceptional services! Their software solutions are top-notch.",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption:
      "Five stars for Devmine! Their pricing is competitive, making them a cost-effective choice for startups like ours.",
  },
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 4",
    caption:
      "Outstanding experience with Devmine! The software's quality and user-friendly design showcased their expertise in the tech industry.",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 5",
    caption:
      "Devmine's innovative software solutions gave us a competitive edge. Highly recommend their services!",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 6",
    caption:
      "Devmine made our project a breeze! We're impressed with their knowledge and professionalism.",
  },
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 7",
    caption:
      "Devmine's team is exceptional! Their software services transformed our operations and helped us achieve our goals.",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 8",
    caption:
      "Efficient and reliable services from Devmine! A remarkable tech startup with a bright future!",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 9",
    caption:
      "Devmine stands out for their seamless user experience and top-tier software.",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 9",
    caption:
      "Thrilled with Devmine's results! Their innovative solutions saved us time and money.",
  },
];

export default function ProfilePage({ scrollToDivComponent }) {
  const [queryUserFullName, setQueryUserFullName] = React.useState("");
  const [queryUserEmail, setQueryUserEmail] = React.useState("");
  const [queryUserPhoneNumber, setQueryUserPhoneNumber] = React.useState("");
  const [queryUserCompany, setQueryUserCompany] = React.useState("");
  const [queryUserMessage, setQueryUserMessage] = React.useState("");

  const sendUserQuery = async () => {
    console.log("sendUserQuery Handler initialted.");
    await axios
      .post(
        "http://ec2-54-196-215-231.compute-1.amazonaws.com:3001/contact-us",
        {
          obj: {
            name: queryUserFullName,
            email: queryUserEmail,
            company: queryUserCompany,
            contact: queryUserPhoneNumber,
            query: queryUserMessage,
          },
        }
      )
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
  React.useEffect(() => {
    if (scrollToDivComponent === "reviews") {
      document
        .querySelector(".reviews-section")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .querySelector(".contact-section")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToDivComponent]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="section reviews-section">
          <br />
          <br />
          <br />
          <br />
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="custom-carousel-1 justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Testimonials</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description text-left">
                  Feedback from our happy customers.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section contact-section">
          <br />
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">02</h5>
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
                      DLF Phase-3, Gurugram, India <br />
                      Bellandur, Bangalore, India <br />
                      South Lotts Road, Dublin, Ireland <br />
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
                      Devmine: +1 5802 1914 15
                      <br />
                      Avinash Jindal: +91 9050 9959 86
                      <br />
                      Arnav Agarwal: +91 7015 7438 55
                      <br />
                      Anirudh Sharma: +35 3852 1906 53
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
