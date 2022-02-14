import React from "react";
import { LayoutWrap } from "./styles";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";
import "antd/dist/antd.css";

const LandingLayout = ({ noPadding, children }) => {
  return (
    <LayoutWrap noPadding={noPadding}>
      <LandingHeader />
      <main className="layout__main">{children}</main>
      <LandingFooter />
    </LayoutWrap>
  );
};

export default LandingLayout;
