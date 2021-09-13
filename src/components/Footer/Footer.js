import {
    Container,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react'

import logo from '../NavBar/logo.png'

const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='tiny' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Inicio
          </List.Item>
          <List.Item as='a' href='#'>
            Contactenos
          </List.Item>
          <List.Item as='a' href='#'>
            Terminos y condiciones
          </List.Item>
          <List.Item as='a' href='#'>
            politicas de privacidad
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
