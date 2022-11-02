import React from "react";
import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import StatusButton from "../../components/Status button/StatusButton";
import { WrapperNavMenu, Wrapper, WrapperButtonMenu } from "./styled";
import FilterBurger from "../../components/FilterBurger/FilterBurger";
import TableMain from "../../components/TableMain/TableMain";

export default function MainPage() {
  return (
    <Wrapper>
      <WrapperNavMenu>
        <Header></Header>
        <User></User>
      </WrapperNavMenu>

      <WrapperButtonMenu>
        <StatusButton></StatusButton>
        <FilterBurger></FilterBurger>
      </WrapperButtonMenu>

      <TableMain></TableMain>
    </Wrapper>
  );
}
