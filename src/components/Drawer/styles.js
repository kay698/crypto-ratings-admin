import { Drawer } from "antd";
import styled from "styled-components";

export const TableDrawerStyles = styled(Drawer)`
  width: 100%;

  .drawerItems_wrap {
    padding: 15px 0;
    border-top: 1px solid #ddd;
    span {
      font-size: 14px;
    }
  }

  .menu {
    cursor: pointer;
  }

  img {
    width: 20px;
    margin-right: 5px;
  }

  h5 {
    margin: 0 20px;
  }
  .copy {
    padding: 5px 15px;
    background: rgba(47, 128, 237, 0.1);
    border-radius: 20px;
    color: #2f80ed;
    font-size: 12px;
  }
  .copied {
    padding: 5px 15px;
    background: rgba(47, 128, 237, 0.3);
    border-radius: 20px;
    color: #2f80ed;
    font-size: 12px;
    font-weight: bold;
  }
  .lastActive {
    padding: 15px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    span {
      margin-bottom: 7px;
      color: #4f4f4f;
    }

    p {
      margin: 0;
      font-size: 16px;
    }
  }
  h5,
  p,
  h4 {
    color: #333333;
  }
  @media (max-width: 800px) {
    .ant-drawer-content-wrapper {
      width: 90% !important;
    }
    button {
      height: 40px !important;
      width: max-content;

      span,
      svg {
        font-size: 15px;
      }
    }
  }

  .logoWrap {
    width: 70px;
    height: auto;
  }
`;
