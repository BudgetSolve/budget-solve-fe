import React from "react";
import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import { WrapperNavMenu } from "../../pages/MainPage/styled";

export default function ItemPage() {
  return (
    <WrapperNavMenu>
      <Header></Header>
      <User></User>
    </WrapperNavMenu>
  );
}
