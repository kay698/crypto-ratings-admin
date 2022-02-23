import styled from "styled-components";
import { Input } from "antd";

export default styled(Input)`
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || "60px"};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background || "rgba(0, 110, 239, 0.1)"};
  border: 1px solid rgba(0, 110, 239, 0.3);
  box-sizing: border-box;
  border-radius: ${({ radius }) => radius || "12px"};
  box-shadow: none;
  font-size: 14px;
  color: #828282;
  ::placeholder,
  .prefix {
    color: #bdbdbd;
    font-size: 14px;
  }
  .prefix {
    padding-right: 15px;
    position: relative;
    ::before {
      content: "";
      width: 1px;
      background: #bdbdbd;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  }

  input {
    background: ${({ background }) => background || "rgba(0, 110, 239, 0.1)"};
  }
  .passwordInput {
    width: ${({ width }) => width || "100%"};
    margin: ${({ margin }) => margin};
    height: ${({ height }) => height || "60px"};
    padding: ${({ padding }) => padding};
    background: ${({ background }) => background || "rgba(0, 110, 239, 0.1)"};
    border: 1px solid rgba(0, 110, 239, 0.3);
    box-sizing: border-box;
    border-radius: ${({ radius }) => radius || "12px"};
    box-shadow: none;
    font-size: 14px;
    input {
      border: none;
      border-radius: 0;
      margin-bottom: 0 !important;
      height: 100%;
    }
  }
`;
