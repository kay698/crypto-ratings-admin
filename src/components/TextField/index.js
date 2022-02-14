import styled from "styled-components";
import { Input } from "antd";

export default styled(Input)`
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || "60px"};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background || "#9342f6"};
  background: rgba(0, 110, 239, 0.1);
  border: 1px solid rgba(0, 110, 239, 0.3);
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: none;
  font-size: 16px;
  color: #828282;
  ::placeholder {
    color: #828282;
  }

  .passwordInput {
    width: ${({ width }) => width || "100%"};
    margin: ${({ margin }) => margin};
    height: ${({ height }) => height || "60px"};
    padding: ${({ padding }) => padding};
    background: ${({ background }) => background || "#9342f6"};
    background: rgba(0, 110, 239, 0.1);
    border: 1px solid rgba(0, 110, 239, 0.3);
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: none;
    font-size: 16px;
    input {
      border: none;
      border-radius: 0;
      margin-bottom: 0 !important;
      height: 100%;
    }
  }
`;
