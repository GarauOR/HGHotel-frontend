import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";

function FoodSlider(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fadeImages = [
    {
      url: "https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "First Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Second Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1578935149228-66b184c83e69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Third Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1582629413153-f78e0c252cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "Fourth Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1594489237444-e68a0ad88c9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "Fifth Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      caption: "Sixth Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1579783411296-c908953b2dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "Seventh Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1582993728648-1f29c748e5ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      caption: "Eighth Slide",
    },
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade
          className="slider"
          arrows={false}
          pauseOnHover={false}
          canSwipe={false}
          cssClass="slidecont"
        >
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img className="zooming" src={fadeImage.url} alt="" />
            </div>
          ))}
        </Fade>
        <div className="divfood"><h3 className="h4 foodtitle">Food Porn</h3></div>
        <div className="div-btn">
          <Button
            className="food-btn"
            variant="outline-light"
            onClick={handleShow}
          >
            View Menu
          </Button>
        </div>
        <Menu show={show} handleClose={handleClose} />
      </div>
    );
  };

  return (
    <section>
      <div>{Slideshow()}</div>
    </section>
  );
}

export default FoodSlider;
