import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 20px 30px;
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  color: rgba(12, 12, 12, 0.75);
`;

export const TableContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const RightColumn = styled.div`
  display: flex;
  gap: 50px;
  padding-right: 50px;
  justify-content: center;
  align-items: center;
`;

export const LeftColumn = styled.div`
  display: flex;
  padding-left: 50px;
  flex-direction: column;
  justify-content: center;
`;

export const ColumnValue = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;