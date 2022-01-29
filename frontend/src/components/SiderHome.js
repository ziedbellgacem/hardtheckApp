import React from "react";
import { Carousel } from "react-bootstrap";
function SliderHome() {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/dec21/slider-selection-pc-de-bureau-gaming-pc-portable-gaming.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/dec21/slider-fete-haut-parleur-traxdata.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/dec21/slider-pc-portable-lenovo-ideapad1-2.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderHome;
