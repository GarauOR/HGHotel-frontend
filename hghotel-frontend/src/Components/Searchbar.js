import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import RoomListBuilder from "./RoomListBuilder";
import RoomCard from "./RoomCard";

function Searchbar(props) {
    const [checkin, setCheckin] = useState(new Date().toISOString().slice(0, 10));
    const [checkout, setCheckout] = useState(new Date().toISOString().slice(0, 10));
    const [roomArray, setRoomArray] = useState([]);
    const [ini, setIni] = useState(0);
    const [outi, setOuti] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    RoomListBuilder(checkin, checkout, setRoomArray, setIni, setOuti);
  };

  return (
    <div>
      <section>
        <Form onSubmit={handleSubmit}>
          <Row>
          <Col>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Number of Guests"
              >
                <Form.Control
                  type="number"
                  name="pax"
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Check-in date"
              >
                <Form.Control
                  type="date"
                  value={checkin}
                  min={new Date().toISOString().slice(0, 10)}
                  max="2023-02-27"
                  name="checkin"
                  onChange={(e)=>{setCheckin(e.target.value);}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Check-out date"
              >
                <Form.Control
                  type="date"
                  value={checkout}
                  min={checkin}
                  max="2023-02-28"
                  name="checkout"
                  onChange={(e)=>{setCheckout(e.target.value);}}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <Button variant="secondary" type="submit" size="lg">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </section>

      <section>
        {roomArray.length>0 ? <RoomCard roomArray={roomArray} ini={ini} outi={outi} setRoomArray={setRoomArray} /> : ""}
      </section>
    </div>
  );
}

export default Searchbar;
