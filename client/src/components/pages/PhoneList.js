import React, { Component } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import PhoneService from './../../service/phones.service'
import PhoneCard from './PhoneCard'
import './Phone.css'


class PhoneList extends Component {
    constructor() {
        super()
        this.state = {
            phones: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        this.refreshPhones()
    }

    refreshPhones = () => {
        this.phoneService
            .getAllPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                
                <Row>
                    {this.state.phones
                        ?
                        this.state.phones.map(elm => {
                            return (
                                <Col lg={4}>
                                    <PhoneCard {...elm} />
                                </Col>
                            )
                        })
                        :
                <Spinner animation="border" variant="primary" />
                    }

                </Row>
            </Container>
        )
    }
}

export default PhoneList