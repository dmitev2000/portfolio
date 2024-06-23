import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
