import styled from "styled-components";
import { Drawer } from "antd";

export const DashboardSideBarStyles = styled.div`
  width: max-content;
  height: calc(100vh - 70px);
  position: fixed;
  z-index: 7;
  bottom: 0;
  left: 0;
  border-right: 1px solid #006eef33;

  .ant-layout-sider {
    width: 150px !important;
    min-width: 150px !important;
    height: 100%;
    bottom: 0;
    background-color: #ffffff;
    @media (max-width: 800px) {
      display: none;
    }

    .links {
      padding: 10px 0;
      margin: 0 0 15px 0;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease;

      img {
        width: 30px;
      }
      span {
        font-size: 14px;
        color: #006eef;
        margin: 10px 0;
      }
    }
    .active {
      opacity: 1;
      background: #006eef11;
      border-right: 4px solid #006eef;
    }
  }
`;

export const MobileDrawer = styled(Drawer)`
  padding-top: 70px;
  z-index: 3;
  @media (min-width: 800px) {
    display: none;
  }
  .ant-drawer-content-wrapper {
    width: 180px !important;
    min-width: 180px !important;
  }
  .ant-drawer-body {
    width: 100%;
    margin: 0;
    padding: 0;

    .links {
      padding: 10px 0;
      margin: 0 0 15px 0;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease;
      svg {
        font-size: 27px;
        color: #006eef;
      }

      img {
        width: 30px;
      }
      span {
        font-size: 16px;
        color: #006eef;
        margin: 10px 0;
      }
    }
    .active {
      opacity: 1;
      background: #006eef11;
      border-right: 4px solid #006eef;
    }
  }
`;
