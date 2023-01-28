import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
import Card from "react-bootstrap/Card";

function Cuisine(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <Card className="martop">
        <Card.Header className="h4 centre color">
        Our Cuisine
        </Card.Header>
        <Card.Text className="centre cuisineCard marrgt marlft">
        <p className="p color" style={{marginBottom:"30px"}}>
          The cuisine of Sardinia is the traditional cuisine of the island of
          Sardinia, and the expression of its culinary art. It is characterised
          by its own variety, and by the fact of having been enriched through a
          number of interactions with the other Mediterranean cultures while
          retaining its own identity. Sardinia's food culture is strictly
          divided into food from the land and food from the sea, reflecting the
          island's historical vicissitudes and especially its geographic
          landscapes, spacing from the coastline to the ragged mountains of the
          interior. The Sardinian cuisine is considered part of the
          Mediterranean diet, a nutritional model that was proclaimed by UNESCO
          as an intangible cultural heritage.
        </p>

        <h5 className="h6 color">Seafood Specialisation</h5>
        <p className="p color">
          Typical dishes of Cagliari are the fregula cun còciula ("fregula with
          clams"); the còciula e cotza a sa schiscionera ("clams and mussels
          cooked in a pan"), and then the burrida a sa casteddaja (based on
          dogfish, vinegar and walnuts), the cassòla, a soup combining various
          kinds of fish, crustaceans and mollusks; s'aligusta a sa casteddaja
          ("Cagliaritan-style lobster"); the common spaghitus with clams and
          butàriga, and the spaghitus cun arritzonis, that is sea urchin
          spaghetti with artichoke or wild asparagus.
        </p>
        <p className="p color">
          The cuisine typical of the Oristano area and the Cabras ponds, but
          even Bosa, often include eels. From the fish eggs, the mullet botarga
          is extracted, which can be served alone or used to dress the pasta.
          Another traditional product is sa merca, made up of slices of boiled
          and salted mullet being wrapped in a sack aromitized with a paludal
          herb, the zibba (obione in Italian). A variety of the burrida
          (dogfish) can also be tasted.
        </p>
        <p className="p color">
          Along the Sulcis coastline are some of the most ancient tuna fisheries
          of the Mediterranean. The local cuisine is influenced by Genoa, and is
          strongly based on bluefin tuna fishing and related products, like
          botarga, the tuna heart, the musciame, the buzzonaglia, the lattume
          and the Tabarchin cascà, a variety of the couscous dressed with
          vegetables.
        </p>
        <p className="p color">
          The cuisine of Alghero reflects the Catalan influence permeating the
          town, which can be seen from the Catalan way with which the lobster is
          prepared, that is boiled with tomato, celery and onion and accompanied
          by a sauce of lemon, olive oil, salt and pepper.
        </p>
        <p className="p color">
          Towards Santa Teresa and the Maddalena archipelago, octopus salads are
          a typical specialty, while in Olbia there are dishes based on mussels
          and clams. From both the north and the south of the island are the
          so-called Ortziadas or Bultigghjata, floured and fried sea anemones.
        </p>
        <div style={{marginBottom:"30px"}}>
          <Button variant="book" onClick={handleShow}>
            View Menu
          </Button>
        </div>
        <Menu show={show} handleClose={handleClose} />
        </Card.Text>
      </Card>
  );
}

export default Cuisine;
