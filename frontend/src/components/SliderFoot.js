import React from "react";
import { Carousel } from "react-bootstrap";
function SliderFoot() {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/ac611163ea603062f24e4f4bf362d9e909fb9988_oneplus-site.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/775979c2169a2ed5f602f694a9b3bb0d2ca3c581_Acer-extensa.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/jan22/slider-box-android-2ref.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderFoot;
