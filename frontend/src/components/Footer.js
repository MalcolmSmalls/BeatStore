import React from "react"
import { Row, Col, Container } from "react-bootstrap"


export default function Footer () {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                     <span>Copyright &copy; Big Chop</span>   
                    </Col>

                </Row>

            </Container>

        </footer>

    )
}