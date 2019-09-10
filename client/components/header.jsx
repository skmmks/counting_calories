import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {
    return (
        <Row>
            <img src="images/smoothies.png" alt="smoothie logo" className="logo"/>
            <Col className="title">The Helpful Calorie Counter</Col>
            <Col sm="4" className="average">Average: <Badge className="badge" color="success">{props.average} cal</Badge></Col>
        </Row>
    )
}

export default Header;
// export default class Header extends React.Component {
//   render() {
//     return (
//       <div className={'row'}>
//         <h1 className={'col-8'}>Counting Calories</h1>
//         <h5 className={'col-4'}>Average Calorie Intake: {props.average}</h5>
//       </div>
//     );
//   }
// }
