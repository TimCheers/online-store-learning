import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "12 pro", price: 10000000, rating: 5, img: "0ecf5bf1-ab2e-4b0c-a9f0-dd2eda415d03.jpg"};
    return (
        <Container className="mt-3">
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>

            </Col>
        </Container>
    );
};
export default DevicePage;
