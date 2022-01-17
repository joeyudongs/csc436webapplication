import React, { useContext } from "react";
import UserBar from "../components/users/UserBar";
import Header from "../components/todos/Header";
import { ThemeContext, StateContext } from "../components/hooks/Contexts";
import { Link } from "react-navi";
import { Navbar, Nav, Container } from "react-bootstrap";
import ChangeTheme from "../components/ChangeTheme";

function HeaderBar({ setTheme }) {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Header text="Sebastian's Todo List" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <Nav.Link>
                <Link href="/todo/create">Create New Todo</Link>
              </Nav.Link>
            )}
            <ChangeTheme theme={theme} setTheme={setTheme} />
          </Nav>
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;
