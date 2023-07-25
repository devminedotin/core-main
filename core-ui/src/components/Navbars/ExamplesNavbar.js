import React from "react";
import { Link } from "react-router-dom";
import { InstagramLink } from "constants";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ExamplesNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
          <img
              alt="..."
              width="42"
              height="auto"
              className="main-logo-nav"
              src={require("assets/img/main-logo.png")}
            />
            <span style={{ fontSize: 24, verticalAlign: "middle"}}> DevMine </span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by DevMine
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem> */}
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem> */}
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href={InstagramLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav>
              <DropdownToggle
                tag={Link}
                to="/"
                color="default"
                nav
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Home
              </DropdownToggle>
              <DropdownToggle
                tag={Link}
                to="/landing-page"
                color="default"
                nav
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Services
              </DropdownToggle>
              
              <DropdownToggle
                tag={Link}
                to="/register-page"
                color="default"
                nav
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Reviews/Testimonials
              </DropdownToggle>
              <DropdownToggle
                tag={Link}
                to="/register-page"
                color="default"
                nav
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Join Community
              </DropdownToggle>
              <DropdownToggle tag={Link} to="/profile-page" color="default" nav>
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Contact Us
              </DropdownToggle>
              {/* <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Landing Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Profile Page
                </DropdownItem>
              </DropdownMenu> */}
            </UncontrolledDropdown>
          
            {/* <NavItem>
              <NavLink tag={Link} to="/">
                Back to Kit
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                Have an issue?
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
