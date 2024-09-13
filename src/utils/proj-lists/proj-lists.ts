import { ProjectDetails } from "../../models/Calsses";
import { ProjectImage, Tag } from "../../models/Enums";

export const ProjectsList: ProjectDetails[] = [
  new ProjectDetails(
    "Wordle",
    [Tag.React, Tag.Bootstrap, Tag.Html, Tag.Css, Tag.ReactMUI, Tag.Javascript],
    "https://dmitev2000.github.io/Wordle/",
    ProjectImage.Wordle,
    new Date(),
    "Wordle puzzle game."
  ),
  new ProjectDetails(
    "Weather forecast",
    [Tag.React, Tag.Angular],
    "https://dmitev2000.github.io/app",
    ProjectImage.Weather,
    new Date("01.05.2022"),
    "Weather forecast app."
  ),
];
