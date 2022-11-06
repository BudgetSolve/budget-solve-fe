import React from "react";
import Header from "../../components/Header/Header";
import TableTeam from "../../components/TableTeam/TableTeam";
import User from "../../components/User/User";
import { WrapperNavMenu, Wrapper } from "../../pages/MainPage/styled";
import FilterBurger from "../../components/FilterBurger/FilterBurger";
import { WrapperFilterMenu } from "./styled";

export default function TeamPage() {
  return (
    <Wrapper>
      <WrapperNavMenu>
        <Header></Header>
        <User></User>
      </WrapperNavMenu>
      <WrapperFilterMenu>
        <FilterBurger></FilterBurger>
      </WrapperFilterMenu>
      <TableTeam></TableTeam>
    </Wrapper>
  );
}