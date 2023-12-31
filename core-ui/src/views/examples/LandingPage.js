import React from "react";
import { Line } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  We keep your code <br />
                  <span className="text-white">secured!</span>
                </h1>
                <p className="text-white mb-3">
                  Our software technology company employs cutting-edge
                  encryption and robust security measures to safeguard your
                  valuable code and intellectual property, ensuring peace of
                  mind and confidentiality for all our clients...
                </p>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,237</CardTitle>
                                <p />
                                <p className="card-category">Clients</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">33,653</CardTitle>
                                <p />
                                <p className="card-category">Commits</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">593</CardTitle>
                                <p />
                                <p className="card-category">Projects</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">10,783</CardTitle>
                                <p />
                                <p className="card-category">Forks</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Large <br />
                      Achivements
                    </h1>
                    <p>
                      Devmine, a trailblazing software technology startup, has
                      achieved remarkable success since its inception. Through
                      relentless innovation and dedication, the company has
                      revolutionized the software development landscape,
                      delivering cutting-edge solutions that cater to diverse
                      industries. Embracing a customer-centric approach, Devmine
                      has garnered widespread acclaim for its user-friendly
                      products, enhancing efficiency and productivity.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Adequate Pricing</h4>
                      <hr className="line-primary" />
                      <p>
                        Embracing affordable pricing as a core leadership
                        principle, "Devmine," our software tech startup, aims to
                        democratize innovation by offering affordable solutions
                        without compromising quality, fostering widespread
                        accessibility and empowering businesses worldwide.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Delivering Values</h4>
                      <hr className="line-warning" />
                      <p>
                        At DevMine, we prioritize delivering value through
                        innovative solutions, exceptional products, and
                        customer-centricity. Our leadership principle drives us
                        to constantly exceed expectations, optimize outcomes,
                        and empower success in the ever-evolving software
                        technology landscape.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Maestros Developers</h4>
                      <hr className="line-success" />
                      <p>
                        Experienced maestros of development, we, at Devmine,
                        boast a seasoned team of skilled professionals
                        well-versed in cutting-edge technologies, committed to
                        crafting top-tier software solutions that cater to our
                        clients' diverse needs with finesse and expertise.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/chester-wade.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">1,186</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">593</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    Devmine offers cutting-edge software solutions with seamless
                    integration, robust security, and scalability, empowering
                    clients to streamline workflows, enhance productivity, and
                    achieve their business objectives efficiently.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted softwares</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Creative solution s</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>24 x 7 support</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="section">
          <br />
          <br />
          <br />
          <br />
          <br />
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
                <p className="profile-description text-left">
                  We are an innovative Software Engineering company, where we
                  build and provide cutting-edge solutions to our valued
                  clients. At DevMine, we pride ourselves on delivering
                  top-notch software engineering services that cater to a
                  diverse range of industries and businesses. Our team of highly
                  skilled and experienced engineers is committed to creating
                  efficient, robust, and scalable software solutions that meet
                  the unique requirements of each client.
                  <h4> </h4>
                  <h4>✔ Agile Development</h4>
                  <h4>✔ Version Control</h4>
                  <h4>✔ CI/CD</h4>
                  <h4>✔ Test-Driven Development (TDD)</h4>
                  <h4>✔ Design Patterns</h4>
                  <h4>✔ Security Measures</h4>
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
          <br />
          <br />
          <br />
          <br />
          <br />

          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel
                    items={[
                      {
                        src: require("assets/img/p1.jpg"),
                      },
                    ]}
                  />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <p className="profile-description text-left">
                  Our dedicated team of technology experts thrives on
                  challenges, and we relish the opportunity to work on projects
                  that make a significant impact in the digital landscape. Here
                  are some of the technology projects we excel in:
                  <h4> </h4>
                  <h4>✔ Web Solutions</h4>
                  <h4>✔ Mobile Solutions</h4>
                  <h4>✔ AI/ML Solutions</h4>
                  <h4>✔ Cloud-native Applications</h4>
                  <h4>✔ Big Data Solutions</h4>
                  <h4>✔ Cybersecurity Solutions</h4>
                  <h4>✔ Blockchain Development</h4>
                  <h4>✔ IoT Solutions</h4>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Investments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="12">
                <hr className="line-info" />
                <h1>
                  Choose a service{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Web Development</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Frontend Development</ListGroupItem>
                        <ListGroupItem>Backend Development</ListGroupItem>
                        <ListGroupItem>Full-Stack Development</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Mobile App Development
                        </h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>iOS App Development</ListGroupItem>
                        <ListGroupItem>Android App Development</ListGroupItem>
                        <ListGroupItem>
                          Cross-Platform App Development
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Cloud Solutions</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>
                          Infrastructure as a Service (IaaS)
                        </ListGroupItem>
                        <ListGroupItem>
                          Platform as a Service (PaaS)
                        </ListGroupItem>
                        <ListGroupItem>
                          Software as a Service (SaaS)
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          AI and Machine Learning
                        </h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>
                          Natural Language Processing (NLP)
                        </ListGroupItem>
                        <ListGroupItem>Computer Vision</ListGroupItem>
                        <ListGroupItem>Predictive Analytics</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Cybersecurity Services
                        </h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Network Security</ListGroupItem>
                        <ListGroupItem>Data Encryption</ListGroupItem>
                        <ListGroupItem>Vulnerability Assessment</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Career Services</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Resume Reviews</ListGroupItem>
                        <ListGroupItem>Roadmap for Placements</ListGroupItem>
                        <ListGroupItem>Mock Interviews</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
