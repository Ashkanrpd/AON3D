import { Navbar, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <div
      className="pl-5 pr-5 w-100 fixed-top"
      style={{ background: "rgba(0, 0, 0, 0.6)" }}
    >
      <Navbar className="row" collapseOnSelect expand="lg" variant="dark">
        <div className="col-md-4">
          <img className="header-logo mr-5" src="/logo.svg" alt="logo"></img>
          <Navbar.Brand href="#home">
            <span className="h6">Home</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <NavDropdown
          className="col-md-4 offset-md-6"
          title="Account"
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
}
