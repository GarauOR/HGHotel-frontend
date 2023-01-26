import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from 'react-bootstrap/Button';
import Menu from "./Menu";

function FoodSlider(props) {
  const [arrows, setArrows] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fadeImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "First Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Second Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Third Slide",
    },
  ];

  const handleClick = () => {
    
  };

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade arrows={arrows}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: "100%" }} src={fadeImage.url} />
            </div>
          ))}
        </Fade>
      </div>
    );
  };

  return (
    <section>
      <div>{Slideshow()}</div>
      <div><Button variant="secondary" onClick={handleShow}>View Menu</Button></div>
      <Menu show={show} handleClose={handleClose} />
    </section>
  );
}

export default FoodSlider;
