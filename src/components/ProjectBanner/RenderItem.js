import React from 'react';
import {
  InfoWrapper,
  GreenText,
  RegularText,
  Element,
} from "./styled";

function RenderItem(props) {
    const data = [
      {
        projectName: "Medical service",
        type: "Medical service",
        language: "EN",
        client: "CVP Company LLC",
        createBy: "Anastasiia H.",
        dateCreated: "16/10/2020",
        startDate: "10/02/2021",
        endDate: "10/05/2023",
        currency: "Dollar $",
        lastEdit: "10/09/2022",
        budget: "$4000",
        used: "$3560",
        remaining: "$440",
      },
    ];
const listItems = data.map((element) => {
  return (
    <InfoWrapper>
      <Element>
        <GreenText>Type:</GreenText>
        <RegularText>{element.type}</RegularText>
      </Element>
      <Element>
        <GreenText>Language:</GreenText>
        <RegularText>{element.language}</RegularText>
      </Element>
      <Element>
        <GreenText>Client:</GreenText>
        <RegularText>{element.client}</RegularText>
      </Element>
      <Element>
        <GreenText>Created by:</GreenText>
        <RegularText>{element.createBy}</RegularText>
      </Element>
      <Element>
        <GreenText>Date created:</GreenText>
        <RegularText>{element.dateCreated}</RegularText>
      </Element>
      <Element>
        <GreenText>Start date:</GreenText>
        <RegularText>{element.startDate}</RegularText>
      </Element>
      <Element>
        <GreenText>End date:</GreenText>
        <RegularText>{element.endDate}</RegularText>
      </Element>
      <Element>
        <GreenText>Currency:</GreenText>
        <RegularText>{element.currency}</RegularText>
      </Element>
      <Element>
        <GreenText>Last edited:</GreenText>
        <RegularText>{element.lastEdit}</RegularText>
      </Element>
      <Element>
        <GreenText>Budget:</GreenText>
        <RegularText>{element.budget}</RegularText>
      </Element>
      <Element>
        <GreenText>Used:</GreenText>
        <RegularText>{element.used}</RegularText>
      </Element>
      <Element>
        <GreenText>Remaining:</GreenText>
        <RegularText>{element.remaining}</RegularText>
      </Element>
    </InfoWrapper>
  );
});
return <div>{listItems}</div>;
}

export default RenderItem;