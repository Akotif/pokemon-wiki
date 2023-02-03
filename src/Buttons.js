import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'

const InfoButtons = () => {
  return (
    <Row>
        <Col sm={3}>
        <Button variant='success'></Button>
        </Col>
        <Col sm={3}>
        <Button variant='success'></Button>
        </Col>
        <Col sm={3}>
        <Button variant='success'></Button>
        </Col>
        <Col sm={3}>
        <Button variant='success'></Button>
        </Col>
    </Row>
  )
}

export default InfoButtons