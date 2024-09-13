import { ReactNode } from "react";
import { Tag } from "./Enums";

export class TechItem {
  constructor(public image: string, public title: string) {}
}

export class SocialNetworkIcon {
  constructor(
    public icon: ReactNode,
    public link: string,
    public tooltip: string
  ) {}
}

export class ProjectDetails {
  constructor(
    public name: string,
    public tags: Tag[],
    public demoLink: string,
    public coverImage: string,
    public date: Date,
    public description: string | undefined
  ) {}
}

export class TagDetails {
  constructor(public title: string, public image: string) {}
}

export class ClientInfo {
  constructor(
    public name: string,
    public logo: string,
    public description: string,
    public url: string
  ) {}
}
