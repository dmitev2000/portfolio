import { Element } from "react-scroll";
import ContactCard from "./interface/ContactCard";
import { Box } from "@mui/material";
import { ContactType } from "../models/Enums";

const Contact = () => {
  return (
    <Element className="item-wrapper" name="contact">
      <h1 className="title">Contact</h1>
      <p className="sub-title">Looking forward to hearing from you</p>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          p: 5,
        }}
      >
        <ContactCard type={ContactType.Email} content="dario_mitev@yahoo.com" />
        <ContactCard type={ContactType.GitHub} content="dmitev2000" />
        <ContactCard type={ContactType.LinkedIn} content="Dario Mitev" />
        <ContactCard type={ContactType.Other} content="Portfolio" />
      </Box>
    </Element>
  );
};

export default Contact;
