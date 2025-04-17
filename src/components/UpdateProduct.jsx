import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState();
    const [success, setSuccess] = useState(false);
    const [validated, setValidated] = useState(false);

    // useEffect using the display the product details
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
                setError(null);
            }).catch(err => {
                setError(`Failed to fetch error: ${err.message}`)
                setLoading(false);
            });

    }, [id]);

    // Handle changes to form inputs 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    //   Handle the form submission 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Update the product information using PUT API
            try {
                const response = await axios.put(`https://fakestoreapi.com/products/${id}`, product)
                setProduct(response.data);
                setSuccess(true);
                setLoading(false);
                setError(null);
            } catch (e) {
                setError(`Failed to Update fetching error: ${e.message}`);
                setSubmitted(false);
            }
        }
        setValidated(true);
    }
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
            <Container className="mt-5 pt-5">
                <h2 className="text-center mt-5 p-4 mb-4">Update the Product</h2>
                {/* Display validation error or success message */}
                {success && <Alert variant="success" dismissible><b>{`Updated Successfully!!!`}</b></Alert>}
                {error && <Alert variant="danger" dismissible> {error}</Alert>}

                {/* Display the form pre-fills validation error or success message */}
                {product && <Form onSubmit={handleSubmit} noValidate validated={validated} className="border p-4 shadow-smt">
                    <Row >
                        <Col className="mb-3">
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label><b>Product Title</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a title" name="title" value={product.title} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a title
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label><b>Price</b></Form.Label>
                                <Form.Control type="number" placeholder="Enter a price" name="price" value={product.price} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a price
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label><b>Description</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a description" name="description" value={product.description} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid description
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCategory">
                                <Form.Label><b>Category</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a category" name="category" value={product.category} onChange={handleChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid category
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-center">
                                <button variant="primary" type="submit">Update</button>
                            </div>
                        </Col>
                    </Row>
                </Form>
                }
            </Container>
        </div>
    );
}
export default UpdateProduct;