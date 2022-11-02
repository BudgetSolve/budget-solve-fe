import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const RightColumn = styled.div`
  display: flex;
  gap: 50px;
  padding-right: 50px;
`;

export const LeftColumn = styled.div`
  display: flex;
  padding-left: 50px;
  flex-direction: column;
  justify-content: center;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-width: 0.5px 0px 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
`;

export const Text = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const ProjectName = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 15px;
  color: #000000;
  margin: 0;
`;

export const ProjectAuthor = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;
