import React from "react";
import Map from "./img/map.png";

function HotelInfo(props) {
  return (
    <section>
      <div>
        <h2>Hotel Information</h2>

        <p>
          Situated on the island of Tenerife – just off the coast of Los
          Gigantes – Oasis Bay is one of Tenerife’s most luxurious and exclusive
          beachfront escapes.
        </p>

        <p>
          The resort, wedged between the jungle and the ocean, features just 36
          thatched villas made out of sustainably sourced wood and recycled
          materials.
        </p>

        <p>
          Each villa has its own private infinity pool, sundeck and a lavish
          indoor-outdoor bathroom.
        </p>

        <p>
          The resort’s pièce de résistance? Its jungle-enshrouded Cinema
          Paradiso, an open-air movie theater set above a lagoon that screens
          films nightly.
        </p>

        <p>Avenida Los Océanos s/n, 38686, Guia De Isora, Islas Canarias</p>
        <h6>(+34)922 123456</h6>
        <h6>reception.oasisbay@hghotel.es</h6>
      </div>

      <div>
        <img src={Map} />
      </div>
    </section>
  );
}

export default HotelInfo;
