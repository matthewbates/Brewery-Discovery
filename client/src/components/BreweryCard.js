import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

function BreweryCard({ name, logo, website, address, favorites, phone }) {
  return (
    <>
      <Col sm={12} md={12} lg={6} className="gap-3 mb-5 mt-5">
        <Card className="card-div mx-auto">
          <Card.Img src={"holder.js/100px270"} alt="Card image" />
          <Card.ImgOverlay>
            <div className="p-4 mt-5 flex-column d-flex justify-content-center">
              <Card.Title>
                <h3>{name}</h3>
              </Card.Title>
              <Card.Text className="">
                <p>{address}</p>
              </Card.Text>
              <Card.Text>
                <p>{website}</p>
              </Card.Text>
              <Card.Text className="card-p-text">
                <p>{phone}</p>
              </Card.Text>
            </div>
            <div className="align-item-end">
              <Card.Body className=" bg-light text-muted">2 days ago</Card.Body>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </>
  );
}

export default BreweryCard;
