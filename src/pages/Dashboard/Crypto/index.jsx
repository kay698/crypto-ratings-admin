import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography, Popover } from "antd";
import Button from "../../../components/Button";
import CustomTable from "../../../components/Table";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { CryptoStyles } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function Crypto() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [showDrawer, setShowDrawer] = useState(true);

  const content = (
    <>
      <p style={{ opacity: ".5" }}>
        <FiEdit style={{ margin: "0 5px -2px 0" }} />
        Edit
      </p>
      <p style={{ color: "red" }}>
        <RiDeleteBin6Line style={{ margin: "0 5px -2px 0" }} />
        Delete
      </p>
    </>
  );

  const columns = [
    {
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
      render: (card) => card.cryptocurrency,
    },

    {
      title: "Crypto",
      dataIndex: "crypto",
      render: (card) => card.Rate,
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, user) => (
        <Popover
          placement="bottomLeft"
          // title={text}
          content={content}
          trigger="click"
        >
          <Button
            width="max-content"
            height="max-content"
            background="transparent"
            boxShadow="none"
            hover="transparent"
          >
            <BiDotsVerticalRounded className="menu" />
          </Button>
        </Popover>
      ),
    },
  ];

  // const handleSearch = async (value) => {
  //   if (value.searchResults === "") {
  //     return;
  //   }
  //   setSearching(true);
  //   try {
  //     const data = await searchTeam(
  //       businessOwner?.businessId,
  //       value.searchResults
  //     );

  //     setSearching(false);
  //     setSearchResults(data);
  //   } catch (e) {
  //     setSearching(false);
  //     console.log(e);
  //   }
  // };

  return (
    <DashboardLayout>
      <CryptoStyles>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between" className="header_wrap">
            <Typography.Title level={2}>Crypto</Typography.Title>
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
                prefix={<BiSearch />}
              />
              <Button height="50px" boxShadow="none">
                + Add New Crypto
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>
          <CustomTable
            func=""
            columns={columns}
            searchResults={searchResults}
          />
        </FlexibleDiv>
      </CryptoStyles>
    </DashboardLayout>
  );
}

export default Crypto;
