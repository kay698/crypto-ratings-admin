import React, { useState } from "react";
import { Layout } from "antd";
import DashboardHeader from "../Header";
import DashboardSideBar from "../SideBar";
import { DashboardLayoutStyles } from "./styles";

const DashboardLayout = ({ children }) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const { Content } = Layout;
  const activePath = window.location.pathname;

  return (
    <DashboardLayoutStyles activePath={activePath}>
      <Layout>
        <DashboardSideBar
          setShowMobileSideBar={setShowMobileSideBar}
          showMobileSideBar={showMobileSideBar}
        />
        <DashboardHeader
          setShowMobileSideBar={setShowMobileSideBar}
          showMobileSideBar={showMobileSideBar}
        />
        <Content>{children}</Content>
      </Layout>
    </DashboardLayoutStyles>
  );
};

export default DashboardLayout;
