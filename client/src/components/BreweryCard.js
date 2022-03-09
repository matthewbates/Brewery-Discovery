import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";

function BreweryCard({
  name,
  logo,
  website,
  address,
  favorites,
  phone,
  brewery_state,
  image,
}) {
  return (
    <>
      <Col sm={12} md={12} lg={6} className="gap-3 mb-5 mt-5">
        <Card className="card-div mx-auto">
          <Card.Img className="img-responsive" src={image} alt="" />
          <Card.ImgOverlay className="card-img-o">
            <div className="p-4 mt-2 flex-column d-flex justify-content-center text-light">
              <Card.Title className="update_title_color">
                <Link to="/beers">
                  <p className="p-2">On Tap Now!</p>
                </Link>
                <h3>{name}</h3>
              </Card.Title>
              <Card.Text className="p-1">{address}</Card.Text>
              <Card.Text className="p-1">{website}</Card.Text>
              <Card.Text className="card-p-text p-1">{phone}</Card.Text>
            </div>

            <div className="card-footer-div bg-light text-muted ">
              <div className="card-b-logo bg-white mx-auto">
                <Image className="" src={logo} alt="" />
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </>
  );
}

export default BreweryCard;
