import React from "react";
import { TableDrawerStyles } from "./styles";

export const TableDrawer = ({ visible, setDrawer, closeDrawer, children }) => {
  return (
    <TableDrawerStyles
      width={700}
      onClose={closeDrawer}
      visible={visible}
      closable={true}
    >
      {children}
    </TableDrawerStyles>
  );
};
