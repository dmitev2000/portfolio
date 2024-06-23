import Tech from "./Tech";
import "./Interface.css";
import { TechItem } from "../../models/Calsses";
import HLine from "./HLine";
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
          items.map((item, index) => (
            <Tech
              key={item.title.concat(`-${index}`)}
              icon={item.image}
              text={item.title}
            />
          ))
        )}
      </div>
      {hasLine && <HLine />}
    </>
  );
};

export default TechList;
