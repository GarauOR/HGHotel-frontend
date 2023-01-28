import React from "react";
import chef from "./img/chef.jpg";
import Card from "react-bootstrap/Card";

function Chef(props) {
  return (
    <div style={{ margin: "40px 0px 30px" }}>
      <section>
        <h2 className="centre h4 color chefGradient">Meet our Chef</h2>
        <Card style={{borderTop:"0px", borderRadius:"0px 0px 7px 7px"}}>
        <section>
          <img src={chef} alt="chef" className="chef-img" />
        </section>
        
        <p className="p centre color martop chef-descr">
          A native Beijinger through and through, Michelin-starred Giovanni from
          Oristano grew up in a traditional 'bidda' where living closely with
          other families instilled a groundedness which he brings to his
          dishes.He also finds culinary inspiration from old books from a
          century ago, reimagining dishes based on the flavour profiles they
          captured.
        </p>
        </Card>
      </section>
    </div>
  );
}

export default Chef;
