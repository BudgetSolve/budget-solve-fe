import React from "react";
import RenderTeam from "./RenderTeam";
import { TableHead, Wrapper, ColumnValue } from "./styled";

function TableTeam(props) {
  return (
    <Wrapper>
      <TableHead>
        <ColumnValue style={{ width: "100px" }}>Name</ColumnValue>
        <ColumnValue style={{ width: "300px" }}>Email</ColumnValue>
        <ColumnValue>Role</ColumnValue>
        <ColumnValue>Last seen</ColumnValue>
        <ColumnValue style={{ width: "0px" }}></ColumnValue>
      </TableHead>
      <RenderTeam></RenderTeam>
    </Wrapper>
  );
}

export default TableTeam;
