import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { DashboardSideBarStyles, MobileDrawer } from "./styles";
import Logo from "../../assets/svgs/logo.svg";
import { SideBarItems } from "../../utils/dataHelpers/sideBarItems";
import { Link } from "react-router-dom";
import { OverFlowScrollBar } from "../../components/OverflowScroll/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLogout as LogoutIcon } from "react-icons/ai";

const DashboardSideBar = ({ setShowMobileSideBar, showMobileSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Sider } = Layout;
  const { Text } = Typography;
  const activePath = location.pathname;

  const handleDrawerClose = () => setShowMobileSideBar(false);

  // const handleLogout = async () => {
  //   sessionStorage.removeItem("admin_token");
  //   router("/login");
  // };

  return (
    <DashboardSideBarStyles>
      {/* Desktop Drawer */}
      <Sider>
        <FlexibleDiv>
          {SideBarItems.map((item, idx) => (
            <FlexibleDiv
              flexDir="column"
              onClick={() => navigate(item.to)}
              className={activePath === item.to ? "links active" : "links"}
            >
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </Sider>

      {/* Mobile drawer */}
      <MobileDrawer
        placement={"left"}
        closable={false}
        onClose={handleDrawerClose}
        visible={true}
      >
        <FlexibleDiv>
          {SideBarItems.map((item, idx) => (
            <FlexibleDiv
              flexDir="column"
              onClick={() => navigate(item.to)}
              className={activePath === item.to ? "links active" : "links"}
            >
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </FlexibleDiv>
          ))}

          <FlexibleDiv
            flexDir="column"
            // onClick={() => navigate(item.to)}
            className="links"
          >
            <LogoutIcon />
            <span>Log out</span>
          </FlexibleDiv>
        </FlexibleDiv>
      </MobileDrawer>
    </DashboardSideBarStyles>
  );
};

export default DashboardSideBar;
