import React, { Component } from 'react'
import PhoneService from './../../service/phones.service'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Phone.css'


export default class PhoneDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        const phone_id = this.props.match.params.phoneId


        this.phoneService
            .getOnePhone(phone_id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.phone
                        ?
                        <>
                            <Col lg={5}>
                                <Card.Img src={this.state.phone.imageFileName}/>
                            </Col>
                            <Col lg={7}>
                                <Card>
                                    <Card.Header className="phone-header">{this.state.phone.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>{this.state.phone.manufacturer}</p>
                                            <p>Color: {this.state.phone.color}</p>
                                            <p>Price: {this.state.phone.price} $</p>
                                            <p>Screen size: {this.state.phone.screen}</p>
                                            <p>Processor: {this.state.phone.processor}</p>
                                            <p>RAM: {this.state.phone.ram}</p>
                                            <p>{this.state.phone.description}</p>
                                        </Card.Text>
                                        <Link to='/' className="btn outline-secondary">Go back</Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </>
                        :
                     <Spinner animation="border" variant="primary" />
                    }

                </Row>
            </Container>
        )
    }
}