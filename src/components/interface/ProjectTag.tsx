import { Avatar, Chip } from "@mui/material";
import { TagDetails } from "../../models/Calsses";
import { SkillIcon, Tag } from "../../models/Enums";
import "./Interface.css";

const ProjectTag = ({ tag }: { tag: Tag }) => {
  const getTagDetails = (): TagDetails => {
    switch (tag) {
      case Tag.React:
        return new TagDetails("React", SkillIcon.React);
      case Tag.Angular:
        return new TagDetails("Angular", SkillIcon.Angular);
      case Tag.Node:
        return new TagDetails("Node", SkillIcon.Node);
      case Tag.Mongo:
        return new TagDetails("Mongo", SkillIcon.Mongo);
      case Tag.Javascript:
        return new TagDetails("Javascript", SkillIcon.Javascript);
      case Tag.Typescript:
        return new TagDetails("Typescript", SkillIcon.Typescript);
      case Tag.Postgres:
        return new TagDetails("Postgres", SkillIcon.Postgres);
      case Tag.Html:
        return new TagDetails("Html", SkillIcon.Html);
      case Tag.Css:
        return new TagDetails("Css", SkillIcon.Css);
      case Tag.Bootstrap:
        return new TagDetails("Bootstrap", SkillIcon.Bootstrap);
      case Tag.Vite:
        return new TagDetails("Vite", SkillIcon.Vite);
      case Tag.ReactMUI:
        return new TagDetails("ReactMUI", SkillIcon.ReactMUI);
      case Tag.AngularMUI:
        return new TagDetails("AngularMUI", SkillIcon.AngularMUI);
      case Tag.Redux:
        return new TagDetails("Redux", SkillIcon.Redux);
      case Tag.RxJs:
        return new TagDetails("RxJs", SkillIcon.RxJs);
      case Tag.NgRx:
        return new TagDetails("NgRx", SkillIcon.NgRx);
      case Tag.JQuery:
        return new TagDetails("JQuery", SkillIcon.JQuery);
      case Tag.NgBootstrap:
        return new TagDetails("NgBootstrap", SkillIcon.NgBootstrap);
      case Tag.SAAS:
        return new TagDetails("SAAS", SkillIcon.SAAS);
      case Tag.Vue:
        return new TagDetails("Vue", SkillIcon.Vue);
      case Tag.Tailwind:
        return new TagDetails("Tailwind", SkillIcon.Tailwind);
      case Tag.CSharp:
        return new TagDetails("CSharp", SkillIcon.CSharp);
      case Tag.NetCore:
        return new TagDetails("NetCore", SkillIcon.NetCore);
      case Tag.EntityFramework:
        return new TagDetails("EntityFramework", SkillIcon.EntityFramework);
      case Tag.SQLServer:
        return new TagDetails("SQLServer", SkillIcon.SQLServer);
      case Tag.Mongoose:
        return new TagDetails("Mongoose", SkillIcon.Mongoose);
      case Tag.Express:
        return new TagDetails("Express", SkillIcon.Express);
      case Tag.Azure:
        return new TagDetails("Azure", SkillIcon.Azure);
      case Tag.AzureWebApp:
        return new TagDetails("AzureWebApp", SkillIcon.AzureWebApp);
      case Tag.AzureFnApp:
        return new TagDetails("AzureFnApp", SkillIcon.AzureFnApp);
      case Tag.AzureBlob:
        return new TagDetails("AzureBlob", SkillIcon.AzureBlob);
      case Tag.Git:
        return new TagDetails("Git", SkillIcon.Git);
      case Tag.Docker:
        return new TagDetails("Docker", SkillIcon.Docker);
      case Tag.Firebase:
        return new TagDetails("Firebase", SkillIcon.Firebase);
      case Tag.Npm:
        return new TagDetails("Npm", SkillIcon.Npm);
      case Tag.Pnpm:
        return new TagDetails("Pnpm", SkillIcon.Pnpm);
      case Tag.Yaml:
        return new TagDetails("Yaml", SkillIcon.Yaml);
      default:
        return new TagDetails("Unknown", SkillIcon.React);
    }
  };

  return (
    <div className="project-tag">
      <Chip
        avatar={
          <Avatar
            sx={{
              bgcolor: "transparent !important",
              border: "solid 1px var(--mblue)",
            }}
            src={getTagDetails().image}
          />
        }
        label={getTagDetails().title}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default ProjectTag;
