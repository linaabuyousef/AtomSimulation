import "semantic-ui-css/semantic.min.css";
import { Container, Form, Grid, Menu } from "semantic-ui-react";
import "../App.css";
import { useRef } from "react";

const NavBar = () => {
  // const emailInputRef = useRef(null);
  // const passwordInputRef = useRef(null);

  // const handleSignIn = () => {
  //   const emailValue = emailInputRef.current.value;
  //   const passwordValue = passwordInputRef.current.value;

  //   // Perform sign-in logic here
  // };

  return (
    <Grid padded className="tablet computer only">
      <Menu inverted borderless fluid fixed="top">
        <Container style={{ fontSize: 30 }}>
          <Menu.Item header>Bohr Atom</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Form>
                <Form.Group inline>
                  {/* <Form.Input
                    ref={emailInputRef}
                    placeholder="Email"
                    type="text"
                  />
                  <Form.Input
                    ref={passwordInputRef}
                    placeholder="Password"
                    type="password"
                  /> */}
                  {/* <Form.Button
                    content="Sign in"
                    color="green"
                    onClick={handleSignIn}
                  /> */}
                </Form.Group>
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </Grid>
  );
};

export default NavBar;
