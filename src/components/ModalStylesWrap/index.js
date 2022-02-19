import styled from "styled-components";
import { Modal, Select } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    max-width: 450px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
  }
  .ant-modal-body {
    height: 100%;
  }
  h3 {
    text-align: center;
    margin-top: 20px;
    font-size: 36px;
    font-family: "KlikMedium" !important;
    font-weight: 500;
    color: #333333;
  }
  .instructionText {
    color: #828282;
    max-width: 314px;
    text-align: center;
    font-size: 14px;
  }
  /* pin input section */
  .pinFormWrap {
    .ant-form {
      width: 100%;
      height: 90%;
      box-sizing: border-box;
      padding: 4em 0 2em 0;
    }
  }

  /* password input section */
  .passwordFormWrap {
    .ant-form {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 4em 0 2em 0;

      .ant-form-item {
        margin: 0;
        width: 100%;

        .ant-input {
          width: 100%;
          height: 68px;
          border-radius: 10px;
          border: none;
          background: #f9f4ff;
          text-align: center;
          font-size: 20px;

          @media (max-width: 400px) {
            width: 48px;
            height: 48px;
          }
        }
      }
    }
  }

  /* success modal style */
  .successWrap {
    padding: 2em 0 2em 0;

    .wellDoneText {
      color: #4dc74d;
      font-size: 36px;
      margin: 0;
    }
    .ant-btn {
      width: 100%;
      height: 70px;
      border: none;
      background: #9342f6;
      border-radius: 10px;
      box-shadow: 0 20px 20px 0 rgba(147, 66, 246, 0.15);

      @media (max-width: 350px) {
        height: 50px;
      }

      :hover {
        background: #6a32af;
      }

      span {
        color: #ffffff;
      }
    }

    .instructionText {
      color: #828282;
      max-width: 314px;
      text-align: center;
      font-size: 14px;
    }
  }

  /* modals with bank list  */
  .bankFormWrap {
    .ant-form {
      width: 100%;
      height: 90%;
      box-sizing: border-box;
      padding: 0 0 2em 0;

      .ant-form-item {
        margin: 20px 0 0 0;
        width: 100%;

        .minAndMaxAmounts {
          span {
            font-size: 12px;
            color: #bdbdbd;
            margin-top: 5px;
          }
        }

        .ant-select:not(.ant-select-customize-input) .ant-select-selector,
        .ant-input,
        .ant-input-affix-wrapper {
          width: 100%;
          height: 60px;
          border-radius: 10px;
          border: none;
          background: #f9f4ff;
          font-size: 14px;

          @media (max-width: 400px) {
            height: 48px;
          }

          input {
            height: 100%;
          }
          img {
            margin: 0 7px;
          }
        }

        .ant-select {
          min-width: 100%;
        }
        .ant-select-selection-search-input {
          height: 100%;
        }
        .ant-select-selection-placeholder,
        .ant-select-selection-item {
          padding-top: 15px !important;
          @media (max-width: 400px) {
            padding-top: 10px !important;
          }
        }
      }
      .accountName {
        text-transform: capitalize;
        margin-top: 10px;
      }
    }

    .ant-btn:disabled,
    .ant-btn[disabled] {
      background: #9342f699;
      color: #666666;

      :hover {
        background: #9342f699;
      }
    }
  }

  button:disabled,
  button[disabled] {
    background: #a9a8dc;
    color: #666666;

    :hover {
      background: #a9a8dc;
    }
  }
`;

// select dropdown style
export const SelectWrap = styled(Select)`
  .ant-select-dropdown-hidden {
    height: 400px !important;
    max-height: 400px !important;
  }

  .ant-select-dropdown-hidden:first-child,
  .ant-select-dropdown:first-child {
    min-width: 100% !important;
    width: 100% !important;
    max-width: 400px !important;
    padding-bottom: 30px !important;
    max-height: 400px !important;
    scrollbar-color: #e3e3e3 transparent;
    scrollbar-width: thin;
  }
`;
