import { Carousel, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";

import hero from "../assets/hero.jpg";
import c1 from "../assets/carousel-1.jpg";
import c2 from "../assets/carousel-2.jpg";
import c3 from "../assets/carousel-3.jpg";
import c4 from "../assets/carousel-4.jpg";
import c5 from "../assets/carousel-5.jpg";
import c6 from "../assets/carousel-6.jpg";
import c7 from "../assets/carousel-7.jpg";

function Home() {
  return (
    <div>
      {/* Beginning to start the  section to display the  Hero image  */}
      <section className="mt-3 p-3 my-5">
        <Row>
          <Col className="mt-5 pt-3">
            <div
              className={styles.heroimage}
              style={{
                backgroundImage: `linear-gradient(rgba(226,213,213,0.4), rgba(230,219,219,0.4)), url(${hero})`,
              }}
            >
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-dark">
                    <h1 className="display-4 fw-bold pt-5 mt-5 mb-3">
                      Welcome to FakeStore<span classs="text-danger"> E</span>
                      -Shopping
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* start the section to display the  welcome message */}
      <section>
        <Row>
          <Col className="text-center mt-3">
            <h2>Welcome to the FakeStore webpage!</h2>
            <p className="lead p-5">
              {" "}
              Welcome to Fakestore Shopping! We’re thrilled to have you here.
              Dive into a world of curated products designed to bring style,
              convenience, and joy to your life. Whether you're searching for
              the perfect gift or treating yourself to something special, we’ve
              got you covered. Shop confidently with our quality guarantee and
              friendly customer support. Let’s make your shopping experience
              extraordinary! Meanwhile, the eCommerce sector is thriving, with
              electronics stores doing quite well. The fact that the tech giant
              is paving the way. Once you’ve found a good supplier, and the it’s
              time to start building your online storefront. There are many
              different options on how to build your website!!! Electronics
              online is now one of the best ideas you can start with. With the
              right dealers and goods, you can turn a profit smoothly. Nowadays,
              business operations are even simpler thanks to technological
              solutions that will help you build and maintain your eCommerce
              store as your business grows. With the above-given tactics in
              mind, your online electronics store will be heading towards
              success in no time. ecosystem that provides greater functionality
              and convenience to vendors and customers alike.
            </p>
          </Col>
        </Row>
      </section>
      {/* Navigation to product list page  */}
      <section className="text-center">
        <Row>
          <Col className="pb-1 m-3">
            <Button
              variant="outline-primary"
              className="custom-button text-align"
              href="/products"
            >
              Product List
            </Button>
          </Col>
        </Row>
      </section>
      {/* start the section to display the slideshow images using Carousel Componenment  */}
      <section className="mt-3 p-3 my-5">
        <Row>
          <Col className="mt-1 pt-2">
            <Carousel>
              <Carousel.Item>
                {/* <img
                  className="d-block w-100"
                  src="./src/assets/carousel-1.jpg"
                  width={300}
                  height={700}
                  alt="First slide"
                /> */}

                <img
                  className="d-block w-100"
                  src={c1}
                  height={700}
                  alt="First slide"
                />

                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>First Slide</h3>
                  <p>
                    A set of 10 shopping icons as online shopping, e-shopping,
                    online market 46524151 Vector Art at Vecteezy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c2}
                  height={700}
                  alt="Second slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Second Slide</h3>
                  <p>
                    Be sure that caution tops your list when shopping online |
                    Article | The United States Army.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c3}
                  height={700}
                  alt="Third slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Third Slide</h3>
                  <p>
                    E-commerce product data: Overcoming key challenges, Retail
                    News, ET Retail.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c4}
                  height={700}
                  alt="Fourth slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Fourth Slide</h3>
                  <p>
                    The AI Revolution: Transforming E-Commerce in the Digital
                    Age — GirlsWhoImpact.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c5}
                  height={700}
                  alt="Fifth slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Fifth Slide</h3>
                  <p>
                    A set of 10 shopping icons as online shopping, e-shopping,
                    online market 46524151 Vector Art at Vecteezy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c6}
                  height={700}
                  alt="Sixth slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Sixth Slide</h3>
                  <p>
                    People shopping and produc Stock Photos, Royalty Free People
                    shopping and produc Images | Depositphotos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={c7}
                  height={700}
                  alt="Seventh slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px black" }}>
                  <h3>Seventh Slide</h3>
                  <p>
                    Understanding online shoppers: Key factors customers seek in
                    e-commerce. — Cleverific.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
