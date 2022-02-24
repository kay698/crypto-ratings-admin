import styled from "styled-components";
import { Modal, Select } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    max-width: 450px;
    min-height: 300px;
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
  h5 {
    text-align: center;
  }
`;
