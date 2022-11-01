import styled from "@emotion/styled";

export const Wrapper = styled.div`
max-width: 150px;
background: #ffffff;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 0 25px;
`;

export const UserName = styled.p`
font-family: "Palanquin";
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 29px;
display: flex;
align-items: center;
gap: 5px;
`;