import { useEffect, useState } from "react";
import { Alert, Button, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "./ProductDetails.module.css";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]); // State to store product
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null);    // Error state
    // useEffect to fetch product when component mounts.
    useEffect(() => {
        // Display the product list using the GET API
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(e => {
                setError(`Failed to fetch Products: ${e.message}`)
                setLoading(false);
            })
    }, []); // Empty dependency array ensures this runs only once
    // check the Handle loading using the loading useState
    if (loading) {
        return (
            <Container className="mt-5 p-5">
                <h3>
                    <Spinner
                        animation="border"
                        variant="info"
                        style={{ marginRight: '15px' }}
                        role="status"
                    />
                    Loading Products...
                </h3>
            </Container>
        )
    }

    return (
        <div>
            {/*  Design for display the product list using the card  */}
            <Container className={styles.proudctscontainer}>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} md={4} className="mt-4 mb-3">
                            <Card className="text-center">
                                <Card.Img className="p-5" variant="top" src={product.image} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted mt-2 p-2"> ${product.price}</Card.Subtitle>
                                    <Button variant="outline-primary" className="m-3 border-0" href={`/product-details/${product.id}`}>View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* Display validation error message */}
            {error && <Alert variant="danger" dismissible> {error}</Alert>}
        </div>
    );
}

export default ProductList;