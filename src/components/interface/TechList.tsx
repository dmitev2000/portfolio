import Tech from "./Tech";
import "./Interface.css";
import { TechItem } from "../../models/Calsses";
import HLine from "./HLine";
import Badge from "@mui/material/Badge";
import StorageIcon from "@mui/icons-material/Storage";

const TechList = ({
  items,
  title,
  hasLine = true,
}: {
  items: TechItem[];
  title: string;
  hasLine?: boolean;
}) => {
  return (
    <>
      <Badge color="primary" badgeContent={items.length}>
        <h2>
          {title}
          <StorageIcon />
        </h2>
      </Badge>
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
