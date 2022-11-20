import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1000px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px 30px;
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 25px;
`;

export const ProjectName = styled.h2`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  color: rgba(12, 12, 12, 0.75);
  margin: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  row-gap: 5px;
  column-gap: 40px;
  align-items: center;
  max-width: 800px;
  flex-wrap: wrap;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px 30px;
`;

export const GreenText = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: rgba(0, 188, 75, 0.75);
  margin: 0;
`;

export const RegularText = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: rgba(12, 12, 12, 0.75);
  margin: 0;
`;

export const Element = styled.div`
  display: flex;
  gap: 8px;
`;
