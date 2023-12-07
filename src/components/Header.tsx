import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

interface IHeaderProps{}

export default function Header({}: IHeaderProps) {

  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });

  const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const now = `${day}${nthNumber(day)} of ${month}`;

  return (
    <Navbar>
        <Container className='d-inline text-center'>
            <h5 className='fw-bold mb-0'>{now}</h5>
            <small className='fw-bold' style={{fontSize: '13px'}}>Today</small>
        </Container>
    </Navbar>
  )
}