import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import DashboardHeader from "../Header";
import DashboardSideBar from "../SideBar";
import { DashboardLayoutStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const { Content } = Layout;
  const activePath = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");

    if (token === null) navigate("/login");
  }, []);

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
