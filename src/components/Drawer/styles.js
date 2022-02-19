import { Drawer } from "antd";
import styled from "styled-components";

export const BroadcastDrawerStyles = styled(Drawer)`
  .ant-select {
    min-width: 48%;
    width: 48%;
    @media (max-width: 1280px) and (min-width: 1000px) {
      min-width: 120px;
    }
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 15px;
    height: 50px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-top: 10px;
  }
  .ant-select-arrow {
    color: #000000;
    font-weight: bold;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 10px !important;
    font-size: 13px;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
  .ant-select-open,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #4221b3;
    box-shadow: none;
  }

  .ant-btn {
    min-width: 100px;
    border-radius: 30px;
    height: 40px;
    background-color: #4221b3;
    border: none;
    margin: 20px 0;
    transition: all 0.1s ease;
    color: #ffffff;

    :hover {
      background-color: #3e278f;
    }
  }
  .saveMessage {
    margin-right: 15px;
    background-color: transparent;
    border: 2px solid #4221b3;
    color: #4221b3;

    :hover {
      color: #ffffff;
      background-color: #4221b3;
    }
  }

  textarea.ant-input {
    min-height: 100px;
    border-radius: 15px;
    padding: 1rem;
  }

  .addImageSection {
    .imageWrap {
      cursor: pointer;
      img {
        width: 120px;
        height: auto;
        max-height: 150px;
      }
    }

    @media (max-width: 800px) {
      padding-top: 20px;
    }
  }
`;
