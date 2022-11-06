import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 25px;
`;

export const Logo = styled.a`
  font-family: "Dancing Script";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  padding: 0 30px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const NavLink = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 0 30px;

  &:hover {
    filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
  }
`;
