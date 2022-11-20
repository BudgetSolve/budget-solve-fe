import React from 'react';
import {
  TableTitle,
  Wrapper,
  LeftTitle,
  Title,
  TableContent,
  TableHead,
  ColumnValue,
  LeftColumn,
  RightColumn,
} from "./styled";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function TableItem(props) {
    return (
      <Wrapper>
        <TableTitle>
          <LeftTitle>
            <DehazeIcon></DehazeIcon>
            <Title>Components</Title>
          </LeftTitle>
          <AddCircleOutlineIcon fontSize="large"></AddCircleOutlineIcon>
        </TableTitle>
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
      </Wrapper>
    );
}

export default TableItem;