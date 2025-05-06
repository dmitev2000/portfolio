import Tech from "./Tech";
import "./Interface.css";
import { TechItem } from "../../models/Calsses";
import HLine from "./HLine";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TechList = ({
  items,
  hasLine = true,
}: {
  items: TechItem[];
  hasLine?: boolean;
}) => {
  return (
    <>
      <div className="tech-list">
        {items.length === 0 ? (
          <p>No items.</p>
        ) : (
          <Carousel
            responsive={responsive}
            swipeable={true}
            autoPlay={true}
            infinite={true}
            rewind={true}
          >
            {items.map((item, index) => (
              <Tech
                key={item.title.concat(`-${index}`)}
                icon={item.image}
                text={item.title}
              />
            ))}
          </Carousel>
        )}
      </div>
      {hasLine && <HLine />}
    </>
  );
};

export default TechList;
