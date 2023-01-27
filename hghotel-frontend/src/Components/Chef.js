import React from "react";
import chef from "./img/chef.jpg";

function Chef(props) {
  return (
    <div>
      <section>
        <h2>Meet our Chef</h2>
        <p>
          A native Beijinger through and through, Michelin-starred Giovanni from
          Oristano grew up in a traditional 'bidda' where living closely
          with other families instilled a groundedness which he brings to his
          dishes.He also finds culinary inspiration from old books from a
          century ago, reimagining dishes based on the flavour profiles they
          captured.
        </p>
      </section>

      <section>
        <img src={chef} alt="chef" />
      </section>
    </div>
  );
}

export default Chef;
