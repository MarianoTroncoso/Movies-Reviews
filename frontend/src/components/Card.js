import React from "react";
import { Card, Button} from "react-bootstrap"

export default function Tajeta() {
    return (
        <Card style={{ width: "18rem" }} className="text-center" bg='light' border="dark">
            <Card.Header>08/10</Card.Header>
            <Card.Img variant="top" src="https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/media/articles/55140/the-truman-show_0.jpg?itok=fpv6GQe4/100px180" />
            <Card.Body>
                <Card.Title>The Truman Show</Card.Title>
                <Card.Text>
                    Opinion disponible
                </Card.Text>
                <Button variant="primary">Ver Opinion</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
}