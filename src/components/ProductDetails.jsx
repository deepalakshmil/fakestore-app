import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  // Display the alter message using the Modal Component
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // navigate the page using useNavigate state
  const navigate = useNavigate();

  useEffect(() => {
    // To display the product details used to GET API.
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setProduct(response.data);
          setLoading(false);
          setError(null);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch((exp) => {
        setError(`Failed to get data error: ${exp.message}`);
        setLoading(false);
      });
  }, [id]);

  //To Delete the product details used to DELETE API.
  const handleSubmit = (event) => {
    if (event.target.name == "delete") {
      setError(null);
      axios
        .delete(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setSuccess(response.data);
          setLoading(false);
          setSuccess(true);
          setSuccess(`Successfully deleted the ${response.data.title}`);
          handleClose();
          navigate("/products");
        })
        .catch((expr) => {
          handleClose();
          setError(`Failed to Delete : ${expr.message}`);
          setLoading(false);
        });
      // use to navigate link to the update page
    } else if (event.target.name == "update") {
      navigate(`/product-update/${id}`);
    }
  };
  // check the Handle loading using the loading useState
  if (loading) {
    return (
      <Container className="mt-5 p-5">
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: "15px" }}
            role="status"
          />
          Loading Products...
        </h3>
      </Container>
    );
  }

  return (
    <div>
      <Container className="mt-5 pt-5">
        {success && (
          <Alert variant="success" dismissible>
            "Hi" {success}
          </Alert>
        )}
        {error && (
          <Alert variant="danger" dismissible>
            {" "}
            {error}{" "}
          </Alert>
        )}
        {product && (
          <Row>
            <Col>
              <Card className={styles.productstyle}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    {" "}
                    <b>Category:</b> {product.category}
                  </Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Link
                    className="custom-button"
                    to="https://demo.snipcart.com/"
                    target="_blank"
                    width={500}
                  >
                    Add to Cart
                  </Link>
                </Card.Body>
                <Card.Body>
                  <div className="d-grid gap-2">
                    <Button
                      variant="info"
                      size="lg"
                      active
                      name="update"
                      onClick={handleSubmit}
                      className="fw-bold p-3"
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      size="lg"
                      active
                      className="fw-bold"
                      type="submit"
                      onClick={handleShow}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you want to Delete the product information to clik the conform
              button!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" name="delete" onClick={handleSubmit}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
export default ProductDetails;
