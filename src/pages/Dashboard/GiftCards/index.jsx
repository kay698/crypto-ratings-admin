import React from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import Button from "../../../components/Button";
import { GiftcardStyles } from "./styles";

function Giftcard() {
  return (
    <DashboardLayout>
      <GiftcardStyles>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between" className="header_wrap">
            <Typography.Title level={2}>Giftcards</Typography.Title>
            <FlexibleDiv
              width="80%"
              justifyContent="space-between"
              className="search_wrap"
              flexWrap="nowrap"
            >
              <Input
                placeholder="search"
                width="78%"
                background="#fff"
                height="50px"
                radius="8px"
              />
              <Button height="50px">+ Add New Category</Button>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </GiftcardStyles>
    </DashboardLayout>
  );
}

export default Giftcard;
