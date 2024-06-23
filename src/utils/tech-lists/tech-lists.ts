import { TechItem } from "../../models/Calsses";
import { SkillIcon } from "../../models/Enums";

export const FrontendTechnologies: TechItem[] = [
  new TechItem(SkillIcon.Html, "HTML"),
  new TechItem(SkillIcon.Css, "CSS"),
  new TechItem(SkillIcon.SAAS, "SAAS"),
  new TechItem(SkillIcon.Javascript, "Javascript"),
  new TechItem(SkillIcon.Typescript, "Typescript"),
  new TechItem(SkillIcon.Bootstrap, "Bootstrap"),
  new TechItem(SkillIcon.Tailwind, "Tailwind"),
  new TechItem(SkillIcon.React, "React"),
  new TechItem(SkillIcon.Angular, "Angular"),
  new TechItem(SkillIcon.Vue, "Vue"),
  new TechItem(SkillIcon.ReactMUI, "Material UI"),
  new TechItem(SkillIcon.AngularMUI, "Ng Material"),
  new TechItem(SkillIcon.NgBootstrap, "Ng Bootstrap"),
  new TechItem(SkillIcon.Vite, "Vite"),
  new TechItem(SkillIcon.Redux, "Redux"),
  new TechItem(SkillIcon.NgRx, "NgRx"),
  new TechItem(SkillIcon.RxJs, "RxJs"),
  new TechItem(SkillIcon.JQuery, "jQuery"),
];

export const BackendTechnologies: TechItem[] = [
  new TechItem(SkillIcon.Node, "NodeJS"),
  new TechItem(SkillIcon.Express, "Express"),
  new TechItem(SkillIcon.Mongoose, "Mongoose"),
  new TechItem(SkillIcon.CSharp, "C#"),
  new TechItem(SkillIcon.NetCore, ".NET Core"),
  new TechItem(SkillIcon.EntityFramework, "Entity"),
];

export const DatabaseTechnologies: TechItem[] = [
  new TechItem(SkillIcon.Mongo, "MongoDB"),
  new TechItem(SkillIcon.Postgres, "PostgreSQL"),
  new TechItem(SkillIcon.SQLServer, "SQL Server"),
];

export const CloudTechnologies: TechItem[] = [];
