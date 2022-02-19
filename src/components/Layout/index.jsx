import React, { useState } from "react";
import { Layout, Typography } from "antd";
import DashboardHeader from "../Header";
import DashboardSideBar from "../SideBar";
import { DashboardLayoutStyles } from "./styles";
import { FlexibleDiv } from "../Box/styles";

const DashboardLayout = ({
  pageHeader,
  pageSubHeader,
  noPadding,
  children,
}) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const { Content } = Layout;
  const { Title, Text } = Typography;
  const activePath = window.location.pathname;

  return (
    <DashboardLayoutStyles noPadding={noPadding} activePath={activePath}>
      <Layout>
        {/* <DashboardHeader
          pageHeader={pageHeader}
          pageSubHeader={pageSubHeader}
          setShowMobileSideBar={setShowMobileSideBar}
          showMobileSideBar={showMobileSideBar}
        /> */}
        <DashboardSideBar
          setShowMobileSideBar={setShowMobileSideBar}
          showMobileSideBar={showMobileSideBar}
        />
        <Content>{children}</Content>
      </Layout>
    </DashboardLayoutStyles>
  );
};

export default DashboardLayout;
