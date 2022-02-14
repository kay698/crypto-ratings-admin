import styled from "styled-components";
import { Button } from "antd";

export default styled(Button)`
  width: ${({ width }) => width || "190px"};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || "60px"};
  padding: ${({ padding }) => padding};
  border: none;
  background: ${({ background }) => background || "#006EEF"};

  border-radius: ${({ radius }) => radius || "10px"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 30px 70px rgba(0, 110, 239, 0.3)"};

  @media (max-width: 350px) {
    height: ${({ height }) => height === "68px" && "50px"};
  }
  :focus {
    background: ${({ background }) => background || "#9342f6"};
  }

  :hover {
    background: ${({ hover }) => hover || "#0653ac"};
  }

  span,
  a {
    color: ${({ color }) => color || "#ffffff !important"};
    font-weight: 600;
    font-size: ${({ fontSize }) => fontSize || "16px"};
  }
`;
// "0 5px 5px 0 rgba(147, 66, 246, 0.15)"
