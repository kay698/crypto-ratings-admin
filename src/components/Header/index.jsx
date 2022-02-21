import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { HeaderStyles } from "./styles";
import Logo from "../../assets/svgs/logo-white.svg";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ setShowMobileSideBar, showMobileSideBar }) => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const handleLogout = async () => {
    sessionStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <HeaderStyles>
      <Header>
        <FlexibleDiv
          className="header__sub"
          height="100%"
          justifyContent="space-between"
        >
          <img src={Logo} alt="" />

          <span onClick={handleLogout}>
            Log Out <AiOutlineLogout />
          </span>
          <AiOutlineMenu
            className="menu"
            onClick={() => setShowMobileSideBar(!showMobileSideBar)}
          />
        </FlexibleDiv>
      </Header>
    </HeaderStyles>
  );
};

export default DashboardHeader;
