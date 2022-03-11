import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
function Reviews({ currentUser }) {
  return (
    <>
      <Container>
        <Col className="text-center mx-auto mt-5 p-5 shadow-sm">
          {currentUser ? (
            <h2>
              This is the Mini-Fridge, a collection of all of your reviews of
              breweries and their beers.
            </h2>
          ) : (
            <Navigate to="/" />
          )}
        </Col>
        <br />
        <Col
          sm={12}
          md={12}
          lg={12}
          className="justify-content-center mb-2 mt-5"
        >
          <hr />
          <div className="d-flex align-items-center justify-content-center">
            <Row className="d-flex align-items-center justify-content-center col-11">
              <Col className="text-center">
                <p className="text-uppercase text-muted beer-title">
                  Beer Name
                </p>

                <h5 className=" beer-details">Sculpin IPA</h5>
              </Col>
              <Col className="text-center">
                <h6 className="text-uppercase text-muted beer-title">ABV</h6>

                <h5 className="beer-details">7.5 %</h5>
              </Col>
              <Col className="text-center">
                <h6 className="text-uppercase text-muted beer-title">
                  Beer Type
                </h6>

                <h5 className="beer-details">IPA</h5>
              </Col>

              <Col lg={3} className="text-center">
                <Button className="" variant="warning">
                  Remove From Beer List
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={12}
          className="justify-content-center mb-2 mt-5"
        >
          <hr />
          <div className="d-flex align-items-center justify-content-center mt-2">
            <Row className="d-flex align-items-center justify-content-center col-11">
              <Col className="text-center">
                <p className="text-uppercase text-muted beer-title">
                  Beer Name
                </p>

                <h5 className=" beer-details">Sculpin IPA</h5>
              </Col>
              <Col className="text-center">
                <h6 className="text-uppercase text-muted beer-title">ABV</h6>

                <h5 className="beer-details">7.5 %</h5>
              </Col>
              <Col className="text-center">
                <h6 className="text-uppercase text-muted beer-title">
                  Beer Type
                </h6>

                <h5 className="beer-details">IPA</h5>
              </Col>

              <Col lg={3} className="text-center">
                <Button className="" variant="warning">
                  Remove From Beer List
                </Button>
              </Col>
            </Row>
          </div>
          
        </Col>
        <hr className="mt-5" />
      </Container>
    </>
  );
}

export default Reviews;
