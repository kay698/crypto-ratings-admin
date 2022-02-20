import React from "react";
import { TableDrawerStyles } from "./styles";

export const TableDrawer = ({ visible, setDrawer, children }) => {
  return (
    <TableDrawerStyles
      width={700}
      onClose={() => setDrawer(false)}
      visible={visible}
    >
      {children}
    </TableDrawerStyles>
  );
};
