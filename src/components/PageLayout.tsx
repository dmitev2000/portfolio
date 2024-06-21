import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="page">{children}</div>;
};

export default PageLayout;
