import React, { useContext, useEffect } from "react";
import { Layout, Typography } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { HeaderStyles } from "./styles";
import { BiArrowBack as BackIcon } from "react-icons/bi";

const DashboardHeader = ({}) => {
  const { Header } = Layout;
  const parentRoutes = [
    "/",
    "/recipes",
    "/products",
    "/user",
    "/surveys",
    "/team",
    "/whatsapp-messaging",
    "/conversations",
  ];

  return (
    <HeaderStyles>
      <Header>
        <FlexibleDiv
          className="header__sub"
          height="100%"
          justifyContent="space-between"
        >
          <FlexibleDiv
            width="max-content"
            flexDir="column"
            height="max-content"
            className="header__sub__textWrap"
            alignItems="flex-start"
          >
            {/* <img
              src={MobileMenuIcon}
              alt=""
              onClick={() => setShowMobileSideBar(true)}
            /> */}
          </FlexibleDiv>
          {/* back icon for sub screens mobile view  */}
          {/* right section for large screen */}\
        </FlexibleDiv>
      </Header>
    </HeaderStyles>
  );
};

export default DashboardHeader;
