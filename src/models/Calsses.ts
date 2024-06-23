import { ReactNode } from "react";

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
