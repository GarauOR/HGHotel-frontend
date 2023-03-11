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
          <span style={{display:"block", marginBottom:"15px"}} className="p">
            Situated on the island of Tenerife - just off the coast of Los
            Gigantes - Oasis Bay is one of Tenerife's most luxurious and
            exclusive beachfront escapes.
          </span>

          <span style={{display:"block", marginBottom:"15px"}} className="p">
            The resort, wedged between the jungle and the ocean, features just
            36 thatched villas made out of sustainably sourced wood and recycled
            materials.
          </span>

          <span style={{display:"block", marginBottom:"15px"}} className="p">
            Each villa has its own private infinity pool, sundeck and a lavish
            indoor-outdoor bathroom.
          </span>

          <span style={{display:"block", marginBottom:"15px"}} className="p">
            The resort's pièce de résistance? Its jungle-enshrouded Cinema
            Paradiso, an open-air movie theater set above a lagoon that screens
            films nightly.
          </span>

          <span style={{margin:"30px 0px 25px", display:"block"}}>
            <img src={Map} alt="map" />
            <span style={{display:"block", marginBottom:"10px", marginTop:"5px"}}>Avenida Los Océanos s/n, 38686, Guia De Isora, Islas Canarias</span>
          <span style={{display:"block", marginBottom:"5px"}} className="contactCont color"><img src={Email} alt="email" className="contact2 marrgt" /><span className="hinfo-title">reception.oasisbay@hghotel.es</span></span>
          <span style={{display:"block", marginBottom:"15px"}} className="contactCont color"><img src={Phone} alt="phone" className="contact marrgt" /><span className="hinfo-title">(+34)922 123456</span></span>
          </span>
        </Card.Text>
      </Card>
    </section>
  );
}

export default HotelInfo;
