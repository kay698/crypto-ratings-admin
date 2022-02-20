import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography, Popover } from "antd";
import Button from "../../../components/Button";
import CustomTable from "../../../components/Table";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { TableDrawer } from "../../../components/Drawer";
import { GiftcardStyles } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function Giftcard() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [showDrawer, setShowDrawer] = useState(false);

  const columns = [
    {
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
      render: (card) => card.category,
    },

    {
      title: "Giftcard",
      dataIndex: "giftcard",
      render: (card) => card.giftcard,
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, user) => (
        <BiDotsVerticalRounded
          className="menu"
          onClick={() => setShowDrawer(true)}
        />
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

  const cardsData = [
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
    {
      cardData: "CAD No Receipt ($25 - $100)",
      price: "NGN 120 / $",
    },
  ];

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
                prefix={<BiSearch />}
              />
              <Button height="50px" boxShadow="none">
                + Add New Category
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>
          <CustomTable
            func=""
            columns={columns}
            searchResults={searchResults}
          />
        </FlexibleDiv>
      </GiftcardStyles>
      <TableDrawer visible={showDrawer} setDrawer={setShowDrawer}>
        <FlexibleDiv justifyContent="space-between">
          <Typography.Title level={4}>Amazon</Typography.Title>
          <Button height="50px" boxShadow="none">
            + New Giftcard
          </Button>
        </FlexibleDiv>
        <FlexibleDiv flexDir="column" margin="20px 0 0 0">
          {cardsData.map((item, idx) => (
            <FlexibleDiv
              justifyContent="space-between"
              key={idx}
              className="drawerItems_wrap"
            >
              <span>
                {item.cardData}&nbsp; | &nbsp;<b>{item.price}</b>
              </span>
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
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </TableDrawer>
    </DashboardLayout>
  );
}

export default Giftcard;
