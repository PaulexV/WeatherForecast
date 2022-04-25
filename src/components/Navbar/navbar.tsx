import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function WeatherNavbar() {

    return (
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">WeatherForecast</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="daily">Météo du jour</Nav.Link>
            <Nav.Link href="weekly">Météo de la semaine</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    )
}
export default WeatherNavbar;