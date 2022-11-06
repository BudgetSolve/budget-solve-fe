import React from "react";
import { ColumnValue, TableRow, Name } from "./styled";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

function RenderTeam(props) {
  const data = [
    {
      name: "Andrew Kormylo",
      email: "andrew@gmail.com",
      role: "Admin",
      lastSeen: "1w",
    },
    {
      name: "Anastasiia Herych",
      email: "anastasiia@gmail.com",
      role: "Admin",
      lastSeen: "2w",
    },
    {
      name: "Yaryna Kireyeva",
      email: "yaryna@gmail.com",
      role: "Admin",
      lastSeen: "1d",
    },
  ];
  const listItems = data.map((element) => {
    return (
      <TableRow>
        <Name>{element.name}</Name>
        <ColumnValue style={{ width: "250px" }}>{element.email}</ColumnValue>
        <ColumnValue style={{ width: "50px" }}>{element.role}</ColumnValue>
        <ColumnValue>{element.lastSeen}</ColumnValue>
        <ColumnValue>
          <EditIcon></EditIcon>
          <ClearIcon></ClearIcon>
        </ColumnValue>
      </TableRow>
    );
  });
  return <div>{listItems}</div>;
}

export default RenderTeam;
