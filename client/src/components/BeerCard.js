import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function BeerCard({ name, abv, type }) {
  return (
    <>
      <Col sm={12} md={12} lg={12} className="justify-content-center mb-2 mt-2">
        <hr />
        <div className="d-flex align-items-center justify-content-center">
          <Row className="d-flex align-items-center justify-content-center col-11">
            <Col className="text-center">
              <p className="text-uppercase text-muted beer-title">Beer Name</p>

              <h5 className=" beer-details">{name}</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">ABV</h6>

              <h5 className="beer-details">{abv}%</h5>
            </Col>
            <Col className="text-center">
              <h6 className="text-uppercase text-muted beer-title">
                Beer Type
              </h6>

              <h5 className="beer-details">{type}</h5>
            </Col>

            <Col lg={3} className="text-center">
              <Button className="" variant="outline-dark">
                Add To Beer List
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default BeerCard;
