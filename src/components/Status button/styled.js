import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const ButonState = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 18px;
  padding: 5px 20px;
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    background: #00b78b;
    color: #ffffff;
  }
`;
