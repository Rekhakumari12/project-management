import React from 'react'
import { Card } from 'react-bootstrap'
export default function Cards() {
  return (
    <Card
      bg="primary"
      // key={idx}
      // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '14rem',margin:"0.5rem" }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
