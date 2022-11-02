import React from "react";
import {
  TableHead,
  Wrapper,
  Text,
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
          <Text>Name</Text>
        </LeftColumn>
        <RightColumn>
          <Text>Created</Text>
          <Text>Last edited</Text>
          <Text>Budget</Text>
          <Text>Profit</Text>
          <Text>Value</Text>
        </RightColumn>
      </TableHead>

      <TableRow>
        <LeftColumn>
          <ProjectName>Insurance</ProjectName>
          <ProjectAuthor>Andrew</ProjectAuthor>
        </LeftColumn>
        <RightColumn>
          <Text>13/10/2022</Text>
          <Text>18/10/2022</Text>
          <Text>2500$</Text>
          <Text>500$</Text>
          <Text>2750$</Text>
        </RightColumn>
      </TableRow>
    </Wrapper>
  );
}

export default TableMain;
