import axios from "axios";
import { useState } from "react";
import { Alert, Button, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";

function AddProduct() {
    const [formData, setFormData] = useState({ title: '', price: '', description: '', category: '', image: '' });
    const [product, setProduct] = useState();
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState('');
    const [validated, setValidated] = useState(false);

    // Handle changes to form inputs 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //   Handle the form submission 
    const handleSubmit = async (event) => {

        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // create the product information using POST API
            try {
                const response = await axios.post('https://fakestoreapi.com/products', formData)
                setProduct(response.data);
                setSubmitted(true);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(`Error submitting from. Post is not fetching  Please try again:  ${error.message}`);
                setSubmitted(false);
                setLoading(false);
            }
        }
        setValidated(true);
    };
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
                <h2 className="text-center mt-5 p-4 mb-4">Add Product</h2>

                {/* Display validation error or success message */}
                {submitted && <Alert variant="success" dismissible>`Successfully {product.title} Created the Product information`</Alert>}
                {error && <Alert variant="danger" dismissible> {error}</Alert>}

                <Form onSubmit={handleSubmit} noValidate validated={validated} className="border p-4 shadow-smt">
                    <Row>
                        <Col>
                            {/* Title */}
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label><b>Product Title</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a title" name="title" value={formData.title} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a title
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Price */}
                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label><b>Price</b></Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" placeholder="select your image folder" name="price" value={formData.price} onChange={handleChange} required />
                                    {/* Check to Validation */}
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Price Number
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            {/* Description */}
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label><b>Description</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a description" name="description" value={formData.description} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid description
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Category */}
                            <Form.Group className="mb-3" controlId="formCategory">
                                <Form.Label><b>Category</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter a category" name="category" value={formData.category} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid category
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Select your Image URL */}
                            <Form.Group className="mb-3" controlId="formImage" >
                                <Form.Label><b>Select your Image URL</b></Form.Label>
                                <Form.Control type="file" placeholder="select your image folder" name="image" value={formData.image} onChange={handleChange} required />
                                {/* Check to Validation */}
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid URL path
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit">Submit</Button>
                            </div>
                        </Col>
                    </Row>

                </Form>
            </Container>
        </div>
    );
}
export default AddProduct;