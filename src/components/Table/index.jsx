import React, { useState, useEffect, useContext } from "react";
import { TableStyles } from "./styles";
import { Table } from "antd";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import { parseResponseToArray } from "../../lib/parseResponse";

const CustomTable = ({
  columns,
  func,
  maxWidth,
  defaultPageSize,
  setSelectedData,
  searchResults,
  searching,
}) => {
  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: defaultPageSize || 20,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(`page=1&perPage=${defaultPageSize || 20}`);
  const [pageSize, setPageSize] = useState(defaultPageSize || 20);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data, total, current } = await func(query);
        setPagination((p) => ({ ...p, total, current, pageSize }));
        setTableData(parseResponseToArray(data));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      fetchData();
    };
  }, [query, setIsLoading, func, pageSize]);

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

  return (
    <TableStyles>
      <OverFlowScrollBar>
        <Table
          dataSource={searchResults || tableData}
          columns={columns}
          noShadow={true}
          pagination={pagination}
          loading={searching || isLoading}
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
