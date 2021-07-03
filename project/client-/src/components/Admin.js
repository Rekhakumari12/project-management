import React, { Component } from 'react'
import { Row, Col,Form } from 'react-bootstrap'
import Popup from './Popup'
import Cards from './Cards'
import styled from 'styled-components'
const H1 = styled.h1`
text-align: center;
padding: 1rem;
border-bottom: 3px solid orange;
`
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <H1 className="heading">Admin Dashboard</H1>
        </div>
        <div className="container mt-3">
          <Popup buttonName="Create Project" heading="Add New Project"/>
          <div className="my-3 text-center">
          <Row className="rowSpace">
            <Col lg={3} md={6} sm={6} xm={12} >
              <Cards/>
            </Col>
            <Col lg={3} md={6} sm={6} xm={12}>
              <Cards/>
            </Col>
            <Col lg={3} md={6} sm={6} xm={12}>
              <Cards/>
            </Col>
            <Col lg={3} md={6} sm={6} xm={12}>
              <Cards/>
            </Col>
          </Row>
        </div>
        </div>
      </div>
    )
  }
}
