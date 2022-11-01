import React from "react";
import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import { WrapperNavMenu } from "./styled";

export default function MainPage() {
  return (
    <WrapperNavMenu>
      <Header></Header>
      <User></User>
    </WrapperNavMenu>
  );
}
