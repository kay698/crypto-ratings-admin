import React, { useState, useEffect, useContext } from "react";
import { TableStyles } from "./styles";
import { Table } from "antd";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { MainContext } from "../../context/MainContext";

const CustomTable = ({
  formIsLoading,
  columns,
  func,
  setTotal,
  maxWidth,
  defaultPageSize,
  setSelectedData,
  addBusinnessId,
  searchResults,
}) => {
  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: defaultPageSize || 10,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(`page=1&perPage=${defaultPageSize || 10}`);
  const [pageSize, setPageSize] = useState(defaultPageSize || 10);
  const {
    state: { user },
  } = useContext(MainContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data, total, current } = await func(query);
        setPagination((p) => ({ ...p, total, current, pageSize }));
        setTableData(data);
        setIsLoading(false);
        if (setTotal) {
          setTotal(total);
        }
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }

    (!formIsLoading || !!formIsLoading) && fetchData();
  }, [query, setIsLoading, func, pageSize, formIsLoading, setTotal]);

  function handleTabChange(pagination) {
    const { current, pageSize } = pagination;
    setQuery(`page=${current}&perPage=${pageSize}`);
    setPageSize(pageSize);
  }

  const rowSelection = {
    onChange: (_, selectedRows) => {
      if (setSelectedData) {
        setSelectedData(selectedRows);
      }
    },
  };

  console.log(tableData);

  return (
    <TableStyles>
      <OverFlowScrollBar>
        <Table
          dataSource={searchResults?.length ? searchResults : tableData}
          columns={columns}
          noShadow={true}
          pagination={pagination}
          loading={isLoading}
          onChange={handleTabChange}
          scroll={{ x: maxWidth || 700 }}
          rowSelection={setSelectedData ? rowSelection : undefined}
          rowKey={(record) => setSelectedData && record._id}
        />
      </OverFlowScrollBar>
    </TableStyles>
  );
};

export default CustomTable;
