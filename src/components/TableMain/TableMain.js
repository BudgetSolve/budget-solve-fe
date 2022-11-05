import React from "react";
import RenderItems from "./RenderItems";
import {
  TableHead,
  Wrapper,
  ColumnValue,
  LeftColumn,
  RightColumn,
} from "./styled";

function TableMain(props) {
  return (
    <Wrapper>
      <TableHead>
        <LeftColumn>
          <ColumnValue>Name</ColumnValue>
        </LeftColumn>
        <RightColumn>
          <ColumnValue>Created</ColumnValue>
          <ColumnValue>Last edited</ColumnValue>
          <ColumnValue>Budget</ColumnValue>
          <ColumnValue>Profit</ColumnValue>
          <ColumnValue>Value</ColumnValue>
        </RightColumn>
      </TableHead>

      <RenderItems></RenderItems>
    </Wrapper>
  );
}

export default TableMain;
