import styled from "@emotion/styled";

export const ButtonState = styled.button`
  background: #00b78b;
  color: #ffffff;
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
  width: 200px;
  margin: 30px auto 10px auto;

  &:hover,
  &:focus {
    background: #ffffff;
    color: black;
  }
`;

export const CommonText = styled.p`
      margin: 0;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      font-family: "Palanquin";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      transition: 0.3s;
      cursor: pointer;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
`;