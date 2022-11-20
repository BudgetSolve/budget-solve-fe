import React from "react";
import Header from "../../components/Header/Header";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import TableItem from "../../components/TableItem/TableItem";
import User from "../../components/User/User";
import { WrapperNavMenu, Wrapper } from "../../pages/MainPage/styled";
import { WrapperBannerMenu } from "./styled";

export default function ItemPage() {
  return (
    <Wrapper>
      <WrapperNavMenu>
        <Header></Header>
        <User></User>
      </WrapperNavMenu>
      <WrapperBannerMenu>
        <ProjectBanner></ProjectBanner>
      </WrapperBannerMenu>

      <TableItem></TableItem>
    </Wrapper>
  );
}
