/*
 * component: FlexibleDiv
 * author: Kelechi Ogbuka
 * Date: June 7th 2021
 * Exam-Padi FlexibleDiv and Gridable component
 *  use props to customize where rendered
 */

import styled from "styled-components";

// Flexible box  div element
export const FlexibleDiv = styled("div")`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "max-content"};
  margin: ${({ margin }) => margin || "0"};
  /* background: ${({ bgColor }) => bgColor || "red"}; */
`;

// Flexible box section element
export const Section = styled("section")`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "max-content"};
  /* background: ${({ bgColor }) => bgColor || "red"}; */
`;

// Flexible box section element
export const UL = styled("ul")`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "max-content"};
  /* background: ${({ bgColor }) => bgColor || "red"}; */
`;

// Gridable box
export const GridableDiv = styled("div")`
  display: grid;
  grid-template-columns: ${({ gridCol }) => gridCol || "1fr"};
  grid-template-rows: ${({ gridRow }) => gridRow || "auto"};
  grid-gap: ${({ gap }) => gap || "10px"};
`;

export const GridSection = styled("section")`
  padding: 50px 0;
  display: grid;
  grid-template-columns: ${({ gridCol }) => gridCol || "1fr  1fr 1fr 1fr"};
  grid-template-rows: ${({ gridRow }) => gridRow || "auto"};
  grid-gap: ${({ gap }) => gap || "10px"};
`;
