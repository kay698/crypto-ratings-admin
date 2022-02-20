import styled from "styled-components";
import { Select } from "antd";

export default styled(Select)`
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || "0 !important"};
  height: ${({ height }) => height || "50px"};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background || "#F5FCFF"};
  border: 1px solid rgba(0, 110, 239, 0.3);
  box-sizing: border-box;
  border-radius: ${({ radius }) => radius || "12px"};
  box-shadow: none !important;
  font-size: 14px;
  color: #828282;
  ::placeholder {
    color: #bdbdbd;
  }

  .ant-select-selector {
    background: transparent !important;
    height: 100% !important;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
  }

  .ant-select-selection-placeholder {
    color: #bdbdbd;
    padding-top: 10px !important;
  }
  .ant-select-selection-item {
    padding-top: 10px !important;
    color: #828282;
  }
`;
