import { TechItem } from "../../models/Calsses";
import { SkillColor, SkillIcon } from "../../models/Enums";

export const FrontendTechnologies: TechItem[] = [
  new TechItem(SkillIcon.React, "React", SkillColor.React),
  new TechItem(SkillIcon.Angular, "Angular", SkillColor.Angular),
  new TechItem(SkillIcon.Javascript, "Javascript", SkillColor.Javascript, true),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
  new TechItem(SkillIcon.Typescript, "Typescript", SkillColor.Typescript),
];

export const BackendTechnologies: TechItem[] = [
  new TechItem(SkillIcon.Node, "Node", SkillColor.Node),
];

export const DatabaseTechnologies: TechItem[] = [
  new TechItem(SkillIcon.Mongo, "MongoDB", SkillColor.Mongo),
  new TechItem(SkillIcon.Postgres, "PostgreSQL", SkillColor.Postgres),
];

export const CloudTechnologies: TechItem[] = [];
