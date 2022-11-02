import React from "react";
import {
  TableHead,
  Wrapper,
  ColumnValue,
  LeftColumn,
  RightColumn,
  TableRow,
  ProjectName,
  ProjectAuthor,
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

      <TableRow>
        <LeftColumn>
          <ProjectName>Insurance</ProjectName>
          <ProjectAuthor>Andrew</ProjectAuthor>
        </LeftColumn>
        <RightColumn>
          <ColumnValue>13/10/2022</ColumnValue>
          <ColumnValue>18/10/2022</ColumnValue>
          <ColumnValue>2500$</ColumnValue>
          <ColumnValue>500$</ColumnValue>
          <ColumnValue>2750$</ColumnValue>
        </RightColumn>
      </TableRow>
    </Wrapper>
  );
}

export default TableMain;
