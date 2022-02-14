import styled from "styled-components";

export const OverFlowScrollBar = styled("div")`
  width: 100%;
  height: 100%;

  div {
    scrollbar-color: #e3e3e3 transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: #bbb;
    }
    &::-webkit-scrollbar-thumb:active {
      background: #78a431;
    }
    &::-webkit-scrollbar-track {
      background: #eeeeee;
      border-radius: 53px;
    }
    &::-webkit-scrollbar-track:hover {
      background: #eff0f5;
    }
    &::-webkit-scrollbar-track:active {
      background: #eeeeee;
    }
    &::-webkit-scrollbar-corner {
      /* background: #e3e3e3; */
    }
  }
`;
