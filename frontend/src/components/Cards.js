import React from 'react';
import Tarjeta from './Card'
import { Container, CardColumns } from "react-bootstrap";

const Cards = () => {
    return (
        <Container fluid="md">
            <CardColumns>
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </CardColumns>
        </Container>
    );
};

export default Cards;