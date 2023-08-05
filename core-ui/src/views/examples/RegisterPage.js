import React from "react";
import classnames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

// core components
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [userStateFocus, setUserStaterFocus] = React.useState(false);
  const [yearsOfExperienceFocus, setyearsOfExperienceFocus] =
    React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [userResidingCityFocus, setUserResidingCityFocus] =
    React.useState(false);
  const [userState, setUserState] = React.useState("");
  const [fullNameValue, setFullNameValue] = React.useState("");
  const [userResidingCity, setuserResidingCity] = React.useState("");
  const [userTechStack, setUserTechStack] = React.useState("");
  const [userContact, setUserContact] = React.useState("");
  const [userCurrentCompany, setUserCurrentCompany] = React.useState("");
  const [userResumeLink, setUserResumeLink] = React.useState("");
  const [userYearsOfExperience, setUserYearssOfExperience] = React.useState(0);
  const [userEmailIdValue, setUserEmailValue] = React.useState("");
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);
  const [resumeLinkFocus, setResumeLinkFocus] = React.useState(false);
  const [techStackFocus, setTechStackFocus] = React.useState(false);
  const [userContactFocus, setUserContactFocus] = React.useState(false);
  const [userCurrentCompanyFocus, setUserCurrentCompanyFocus] =
    React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  React.useEffect(() => {
    console.log(termsAndConditions);
  }, [termsAndConditions]);

  const AddUserJoinUs = async () => {
    if (!termsAndConditions) {
      alert("Please check terms and conditions.");
      return;
    }
    await JoinUsHandler();
  };

  const varTemp = {
    name: fullNameValue,
    state: userState,
    city: userResidingCity,
    yearsOfExperience: userYearsOfExperience,
    techStack: userTechStack,
    contact: userContact,
    currentCompany: userCurrentCompany,
    resumeLink: userResumeLink,
    emailId: userEmailIdValue,
  };

  const JoinUsHandler = async () => {
    console.log("JOinUs Handler initialted.", varTemp);
    await axios
      .post("http://localhost:3001/join-community", {
        obj: {
          name: fullNameValue,
          state: userState,
          city: userResidingCity,
          yearsOfExperience: userYearsOfExperience,
          techStack: userTechStack,
          contact: userContact,
          currentCompany: userCurrentCompany,
          resumeLink: userResumeLink,
          emailId: userEmailIdValue,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register" style={{ width: "350px" }}>
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4"> Register</CardTitle>
                    </CardHeader>
                       
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            required={true}
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                            onChange={(e) => {
                              setFullNameValue(e.target.value);
                              console.log(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": userStateFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="State"
                            type="text"
                            onFocus={(e) => setUserStaterFocus(true)}
                            onBlur={(e) => setUserStaterFocus(false)}
                            onChange={(e) => setUserState(e.target.value)}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": userResidingCityFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="City"
                            type="text"
                            onFocus={(e) => setUserResidingCityFocus(true)}
                            onBlur={(e) => setUserResidingCityFocus(false)}
                            onChange={(e) => {
                              setuserResidingCity(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            onChange={(e) => {
                              setUserEmailValue(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": yearsOfExperienceFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Years Of Experience(YOE)"
                            type="text"
                            onFocus={(e) => setyearsOfExperienceFocus(true)}
                            onBlur={(e) => setyearsOfExperienceFocus(false)}
                            onChange={(e) => {
                              setUserYearssOfExperience(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": techStackFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Tech Stack"
                            type="text"
                            onFocus={(e) => setTechStackFocus(true)}
                            onBlur={(e) => setTechStackFocus(false)}
                            onChange={(e) => {
                              setUserTechStack(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": userContactFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contact(include Country Code)"
                            type="text"
                            onFocus={(e) => setUserContactFocus(true)}
                            onBlur={(e) => setUserContactFocus(false)}
                            onChange={(e) => {
                              setUserContact(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": userCurrentCompanyFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Current Company"
                            type="text"
                            onFocus={(e) => setUserCurrentCompanyFocus(true)}
                            onBlur={(e) => setUserCurrentCompanyFocus(false)}
                            onChange={(e) => {
                              setUserCurrentCompany(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": resumeLinkFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>

                          <Input
                            placeholder="Resume Link"
                            type="text"
                            onFocus={(e) => setResumeLinkFocus(true)}
                            onBlur={(e) => setResumeLinkFocus(false)}
                            onChange={(e) => {
                              setUserResumeLink(e.target.value);
                            }}
                          />
                        </InputGroup>

                        <FormGroup check className="text-left">
                          <Label check>
                            <Input
                              type="checkbox"
                              onClick={() => {
                                setTermsAndConditions(!termsAndConditions);
                              }}
                            />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        size="lg"
                        onClick={() => AddUserJoinUs()}
                      >
                        Join US!
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
