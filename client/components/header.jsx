import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {
    return (
        <Row className="header">
            <img src="images/smoothies.png" alt="smoothie logo" className="logo"/>
            <Col className="title"><Badge className="ml-2 mb-2" color="secondary">The Helpful Calorie Counter</Badge></Col>
            <Col sm="4" className="average"><Badge className="ml-2 mb-2" color="light">{props.average}</Badge></Col>
        </Row>
    )
}

export default Header;
