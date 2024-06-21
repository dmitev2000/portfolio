import { ReactNode } from "react";
import { SkillColor } from "./Enums";

export class TechItem {
  constructor(
    public image: string,
    public title: string,
    public color: SkillColor,
    public dark: boolean = false
  ) {}
}

export class SocialNetworkIcon {
  constructor(public icon: ReactNode, public link: string, public tooltip: string) {}
}
