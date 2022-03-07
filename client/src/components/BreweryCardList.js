import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

function BreweryCardList({ breweries }) {
  return (
    <>
      <ul>
        {breweries.map((brewery) => {
          return (
            <BreweryCard
              key={brewery.id}
              name={brewery.brewery_name}
            />
          )
        })}
      </ul>
      <Container>
        {/* <Row>
          <Col xs={12} lg={6}>
            1 of 2
          </Col>
          <Col xs={12} lg={6}>
            2 of 2
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={6}>
            1 of 3
          </Col>
          <Col xs={12} md={4} lg={6}>
            2 of 3
          </Col>
          <Col xs={12} md={4} lg={6}>
            3 of 3
          </Col>
        </Row> */}
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="gap-3 mb-3">
            <Card className="bg-dark text-white card-div mx-auto">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BreweryCardList;
