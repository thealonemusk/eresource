import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes } from '../lib/types';

export default function Header() {
  return (
    <Navbar expand="lg" className="sticky-top navbar">
      <Container>
        <Link href={Routes.HOME} passHref>
          <Navbar.Brand className="text-light">Eresource</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto txt-light">
            <Link href={Routes.HOME} passHref>
              <Nav.Link className="text-light">Dashboard</Nav.Link>
            </Link>
            <Link href={Routes.PROPERTIES} passHref>
              <Nav.Link className="text-light">Current Sources</Nav.Link>
            </Link>
            <Link href={Routes.energy_CREATE} passHref>
              <Nav.Link className="text-light">Create Energy Sources</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
