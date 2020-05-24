import React from 'react'
import {Jumbotron, Card , ListGroup, Alert} from 'react-bootstrap'

const links = [
  {
    class: 'text-dark',
    link: 'https://www.root-me.org/jenaye?lang=fr',
    name: 'Root-me',
  },
  {
    class: 'text-danger',
    link: 'https://www.root-me.org/jenaye?lang=fr',
    name: 'Hackthebox',
  },
  {
    link: 'https://www.root-me.org/jenaye?lang=fr',
    name: 'Twitter',
  },
  {
    link: 'https://www.root-me.org/jenaye?lang=fr',
    name: 'Github',
  },
];

export const Profile = () => (
  <Jumbotron>
    <h1>Houziaux Mike</h1>

    I'm an IT engineer and I'm working as a pentester for Orange Cyberdefense.<br/>

    I am a contributor to the <a href="http://rtfm.re/">RTFM</a> association, especially to the challenges creations part of the <a href="https://twitter.com/sigsegv_event">Sigvsegv event</a>.<br/>

    I also contribute to several open source projects, such as this <a href="https://inventory.rawsec.ml/tools.html">inventory</a> of cybersecurity oriented tools.<br/>

    I am also a member of the CTF team <a href="https://inshallhack.org/">Inshallhack</a><br/>

    <br/>
    <Card className='col-12 col-sm-10 col-md-6 p-0'>
      <Card.Header>Links</Card.Header>
      <ListGroup variant="flush">
        {
          links.map((item, key) => (
            <ListGroup.Item key={key}>
              <a href={ item.link } className={item.class || ''}>{ item.name }</a>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>

    <br/>
    <Alert variant="dark">
      Contact by email  jenaye[@]protonmail.com
    </Alert>
  </Jumbotron>
);
