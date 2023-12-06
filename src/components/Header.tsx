import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

interface IHeaderProps{}

export default function Header({}: IHeaderProps) {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>Bella's To-Do</Navbar.Brand>
        </Container>
    </Navbar>
  )
}