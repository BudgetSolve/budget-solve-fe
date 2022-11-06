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
  justify-content: space-around;
  padding: 10px 0;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-width: 0.5px 0px 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0;
`;

export const ColumnValue = styled.p`
  font-family: "Palanquin";
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const Name = styled.p`
  width: 160px;
  font-family: "Palanquin";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 15px;
  color: #000000;
  margin: 0;
`;
