import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <Container>
      <Row>
        <div className="col-lg-6 d-flex flex-column justify-content-left">
          <h1 data-aos="fade-up">Everyday I&apos;m Blubber-in</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-center text-lg-start">
              <Button
                href="#about"
                size="lg"
                className="scrollto d-inline-flex"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img">
          <img
            src="https://fakeimg.pl/540x440/?text=Hero"
            className="img-fluid"
            alt=""
          ></img>
        </div>
      </Row>
    </Container>
  );
}
