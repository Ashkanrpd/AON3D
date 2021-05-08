import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  return (
    <nav
      className="navbar fixed-top"
      style={{ background: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="container-fluid">
        <div className="row w-100">
          <div className="text-white d-flex align-items-center ms-2">
            <div className="flex-grow-1">
              <img src="/logo.svg" alt="logo"></img>
              <span className="ms-5">Home</span>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-transparent border-0"
                id="dropdown-basic"
              >
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}
