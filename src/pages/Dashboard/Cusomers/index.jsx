import React, { useState } from "react"
import DashboardLayout from "../../../components/Layout"
import Input from "../../../components/TextField"
import { FlexibleDiv } from "../../../components/Box/styles"
import { Typography, Popover } from "antd"
import Button from "../../../components/Button"
import CustomTable from "../../../components/Table"
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi"
import { TableDrawer } from "../../../components/Drawer"
import { CustomersStyles } from "./styles"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import Phone from "../../../assets/svgs/call.svg"
import Mail from "../../../assets/svgs/sms.svg"
import Trash from "../../../assets/svgs/trash.svg"
import { getAllUsers } from "../../../network/users"

function Customers() {
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState()
  const [showDrawer, setShowDrawer] = useState(false)

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      render: (user) => user.category,
    },

    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (user) => user.email,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
      render: (user) => user.emal,
    },
    {
      title: "Last active",
      dataIndex: "active",
      key: "active",
      render: (user) =>
        user.active === "Active" ? (
          <p
            style={{
              padding: "5px",
              borderRadius: "10px",
              background: "#27AE601A",
              color: "#27AE60",
            }}
          >
            {user.active}
          </p>
        ) : (
          user.active
        ),
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
  ]

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
  )
  return (
    <DashboardLayout>
      <CustomersStyles>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between" className="header_wrap">
            <Typography.Title level={2}>Customers</Typography.Title>
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
            func={getAllUsers}
            columns={columns}
            searchResults={searchResults}
          />
        </FlexibleDiv>
      </CustomersStyles>
      <TableDrawer visible={showDrawer} setDrawer={setShowDrawer}>
        <FlexibleDiv justifyContent="space-between">
          <Typography.Title level={4}>Customer Contact Info</Typography.Title>
          <Button height="50px" boxShadow="none" background="red" hover="red">
            <img src={Trash} alt="" />
            Delete Customers
          </Button>
        </FlexibleDiv>
        <FlexibleDiv flexDir="column" margin="20px 0 0 0">
          <FlexibleDiv justifyContent="flex-start">
            <img src={Mail} alt="" />
            <Typography.Title level={5}>gianalubin@gmail.com</Typography.Title>
            <span className="copy">Copy email</span>
          </FlexibleDiv>
          <FlexibleDiv justifyContent="flex-start" margin="20px 0">
            <img src={Phone} alt="" />
            <Typography.Title level={5}>(702) 555-0122</Typography.Title>
            <span className="copy">Copy phone</span>
          </FlexibleDiv>

          <FlexibleDiv
            className="lastActive"
            flexDir="column"
            alignItems="flex-start"
          >
            <span>Last active</span>
            <p level={5}>
              <b>5 hours ago</b>
            </p>
          </FlexibleDiv>
        </FlexibleDiv>
      </TableDrawer>
    </DashboardLayout>
  )
}

export default Customers
