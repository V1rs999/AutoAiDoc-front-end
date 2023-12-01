import { Carousel } from "react-carousel-minimal";
import "./Slider.scss";
function Slider() {
  const data = [
    {
      image: "../../../../../public/6f9d7f265053f2d6eff76407bfd607c3.png",
    },
    {
      image: "../../../../../public/T-Roc TC0892_4K.jpeg",
    },
    {
      image: "../../../../../public/image 10.png",
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={3000}
            width="100vw"
            height="740px"
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              minWidth: "100vw",
              maxHeight: "740px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
