import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./DataDisplay.css";
import { TechItem } from "../../../models/Calsses";
import Tech from "../Tech";

const Slider = ({ sliderItems }: { sliderItems: TechItem[] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-wrapper">
      <Carousel
        centerMode={true}
        swipeable={true}
        infinite={true}
        showDots
        arrows={false}
        autoPlay={true}
        responsive={responsive}
      >
        {sliderItems.map((item, index) => {
          return (
            <Tech
              key={item.title.concat(`-${index}`)}
              icon={item.image}
              text={item.title}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
