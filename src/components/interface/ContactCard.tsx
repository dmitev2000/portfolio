import { Box, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { ContactType } from "../../models/Enums";
import { useEffect, useState } from "react";

const ContactCard = ({
  type,
  content,
}: {
  type: ContactType;
  content: string;
}) => {
  const [contentHeader, setContentHeader] = useState<string>("Contact");

  useEffect(() => {
    switch (type) {
      case ContactType.Email:
        setContentHeader("Email");
        break;
      case ContactType.LinkedIn:
        setContentHeader("LinkedIn");
        break;
      case ContactType.GitHub:
        setContentHeader("GitHub");
        break;
      case ContactType.Other:
        setContentHeader("Website");
        break;
      default:
        setContentHeader("Contact");
    }
  }, [type]);

  return (
    <Paper elevation={5} className="contact-card" sx={{ p: 3 }}>
      {type === ContactType.Email && (
        <EmailIcon color="primary" fontSize="large" />
      )}
      {type === ContactType.LinkedIn && (
        <LinkedInIcon color="primary" fontSize="large" />
      )}
      {type === ContactType.GitHub && (
        <GitHubIcon color="primary" fontSize="large" />
      )}
      {type === ContactType.Other && (
        <LanguageIcon color="primary" fontSize="large" />
      )}
      <Box className="contact-card-content">
        <Typography variant="button">{contentHeader}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
      <IconButton>
        <ArrowForwardIosIcon />
      </IconButton>
    </Paper>
  );
};

export default ContactCard;
