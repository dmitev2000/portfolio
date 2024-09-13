import { Element } from "react-scroll";
import { ClientList } from "../utils/client-list/client-list";
import ClientItem from "./interface/ClientItem";

const Clients = () => {
  return (
    <Element
      className="item-wrapper custom-card"
      name="clients"
      id="clients"
    >
      <h1 className="title">Clients</h1>
      <p className="sub-title">My previous clients that I worked for.</p>
      <div className="client-list">
        {ClientList.map((x) => {
          return <ClientItem clientInfo={x} key={x.name} />;
        })}
      </div>
    </Element>
  );
};

export default Clients;
