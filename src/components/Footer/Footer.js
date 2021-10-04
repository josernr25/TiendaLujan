import {
    Container,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react'

import logo from '../NavBar/logo.png'

const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: '1em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='tiny' src={logo} />
      </Container>
    </Segment>
  );
};

export default Footer;
