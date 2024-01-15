import { Carousel } from "react-carousel-minimal";
import "./Slider.scss";
function Slider() {
  const data = [
    {
      image:
        "https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1600_Component.Box_Stage_Parallax_StageList_Item_Image_Component/7123-stage-stageList-932229-image-b1600/dh-1920-a99f00/086b7f2c/1700719165/tn2470.jpg",
    },
    {
      image: "https://i.postimg.cc/zG48RL25/T-Roc-TC0892-4-K.jpg",
    },
    {
      image: "https://i.postimg.cc/fb3yGnpW/image-10.png",
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App" role={"slider"}>
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
