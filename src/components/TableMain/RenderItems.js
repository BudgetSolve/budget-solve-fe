import React from "react";
import {
  ColumnValue,
  LeftColumn,
  RightColumn,
  TableRow,
  ProjectName,
  ProjectAuthor,
} from "./styled";

function RenderItems({projects}) {
  const data = [
    {
      projectName: "Insurance",
      projectAuthor: "Andrew",
      createdAt: "13/10/2022",
      lastEdited: "18/10/2022",
      budget: "2500$",
      profit: "500$",
      value: "2750$",
    },
    {
      projectName: "Fish Restaurant",
      projectAuthor: "Andrew",
      createdAt: "20/11/2021",
      lastEdited: "12/10/2022",
      budget: "3500$",
      profit: "300$",
      value: "3050$",
    },
  ];
  const listItems = projects.map((element) => {
    return (
      <TableRow>
        <LeftColumn>
          <ProjectName>{element.projectName}</ProjectName>
          <ProjectAuthor>{element.projectAuthor}</ProjectAuthor>
        </LeftColumn>
        <RightColumn>
          <ColumnValue>{element.createdAt}</ColumnValue>
          <ColumnValue>{element.lastEdited}</ColumnValue>
          <ColumnValue>{element.budget}</ColumnValue>
          <ColumnValue>{element.profit}</ColumnValue>
          <ColumnValue>{element.value}</ColumnValue>
        </RightColumn>
      </TableRow>
    );
  });
  return <div>{listItems}</div>;
}

export default RenderItems;
