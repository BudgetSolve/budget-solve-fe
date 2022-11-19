import React from "react";
import RenderItems from "./RenderItems";
import {
  TableHead,
  Wrapper,
  ColumnValue,
  LeftColumn,
  RightColumn,
} from "./styled";

function TableMain({projects}) {
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

      {projects && <RenderItems projects={projects}></RenderItems>}
    </Wrapper>
  );
}

export default TableMain;
