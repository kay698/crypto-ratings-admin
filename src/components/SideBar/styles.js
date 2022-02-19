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
      padding: 30px 0;
      opacity: 0.5;

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
    }
  }
`;

export const MobileDrawer = styled(Drawer)`
  @media (min-width: 800px) {
    display: none;
  }
  .ant-drawer-body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .sideBar__sub {
    padding: 0 0 20px 0;
    height: 100vh;

    .imageWrap {
      width: 30px;
      min-height: 100px;
      margin-left: 15px;
      img {
        width: 100%;
      }
    }
    .itemsAndLoginWrap {
      height: calc(100vh - 150px);
      overflow-y: auto;
      overflow-x: hidden;
    }

    .logoutWrap {
      .logoutMain {
        background: #e9e9e9;
        border: none;
        border-radius: 20px;
        padding: 0 25px;
        width: 150px;
        flex-wrap: nowrap;
        height: 50px;
        cursor: pointer;
        transition: all 0.1s ease;
        :hover {
          background: #e9e9d7;
        }

        .iconWrap {
          width: max-content;
          padding: 8px;
          background-color: white;
          border-radius: 100%;

          img {
            width: 17px;
          }
        }

        span {
          font-size: 14px;
          color: #78a431;
        }
      }
    }
    .sideBar__sub__itemsWrap {
      a {
        width: 100%;

        .itemSubWrap {
          transition: all 0.3s ease;
          padding: 10px 0;
          margin: 5px 10px;
          flex-wrap: nowrap;
          border-radius: 10px;
          transition: all 0.1s ease;
          height: 40px;
          min-height: 40px;
          width: 90%;

          :hover {
            background: #e9e9d7;
          }

          @media (min-height: 700px) {
            margin: 10px 0;
          }

          img {
            margin: 0 10px;
            width: 18px;
          }
          span {
            font-weight: 500;
            font-size: 12px;
            letter-spacing: 0.05rem;
            min-width: 150px;
            color: #00000080;
            font-weight: 500;
          }
        }
        .active {
          background: #78a431;
          :hover {
            background: #78a431;
          }

          span {
            color: #fff;
          }
        }
      }
    }

    @media (max-height: 620px) {
      height: max-content;

      .itemsAndLoginWrap {
        height: calc(100vh - 100px);
      }

      .imageWrap {
        width: 50px;
        min-height: 80px;
        img {
          width: 100%;
        }
      }
    }
    @media (max-height: 560px) {
      height: max-content;
      width: 100%;

      .itemsAndLoginWrap {
        height: max-content;
        max-height: calc(100vh - 80px);
        margin-top: 20px;
        padding-bottom: 40px;
        .logoutWrap {
          margin-top: 20px;
        }
      }

      .imageWrap {
        width: 40px;
        min-height: 80px;
        img {
          width: 100%;
        }
      }
    }
  }
`;
