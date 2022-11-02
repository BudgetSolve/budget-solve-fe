import React from "react";
import { ButonState, Wrapper } from "./styled.js";

function StatusButton(props) {
  return (
    <Wrapper>
      <ButonState>Active</ButonState>
      <ButonState>Finished</ButonState>
      <ButonState>Archived </ButonState>
    </Wrapper>
  );
}

export default StatusButton;
