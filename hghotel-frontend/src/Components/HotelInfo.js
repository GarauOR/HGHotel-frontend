import React from "react";
import Map from "./img/map.png";
import Card from "react-bootstrap/Card";
import Phone from "./img/phone.png";
import Email from "./img/Email.png";

function HotelInfo(props) {
  return (
    <section className="martop infoAlign color">
      <Card>
        <Card.Header className="h4" style={{marginBottom:"20px"}}>
          Hotel Information
        </Card.Header>
        <Card.Text className="cuisineCard">
          <p className="p">
            Situated on the island of Tenerife – just off the coast of Los
            Gigantes – Oasis Bay is one of Tenerife’s most luxurious and
            exclusive beachfront escapes.
          </p>

          <p className="p">
            The resort, wedged between the jungle and the ocean, features just
            36 thatched villas made out of sustainably sourced wood and recycled
            materials.
          </p>

          <p className="p">
            Each villa has its own private infinity pool, sundeck and a lavish
            indoor-outdoor bathroom.
          </p>

          <p className="p">
            The resort’s pièce de résistance? Its jungle-enshrouded Cinema
            Paradiso, an open-air movie theater set above a lagoon that screens
            films nightly.
          </p>

          <div style={{margin:"30px 0px 25px"}}>
            <img src={Map} />
            <p>Avenida Los Océanos s/n, 38686, Guia De Isora, Islas Canarias</p>
          <span className="contactCont color"><img src={Email} className="contact2 marrgt" /><h6>reception.oasisbay@hghotel.es</h6></span>
          <span className="contactCont color"><img src={Phone} className="contact marrgt" /><h6>(+34)922 123456</h6></span>
          </div>
        </Card.Text>
      </Card>
    </section>
  );
}

export default HotelInfo;
