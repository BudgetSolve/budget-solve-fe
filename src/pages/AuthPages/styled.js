import styled from "@emotion/styled";

export const mainColor = '#00b78b'

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 500px;
  height: 400px;
  margin: 150px auto;
  padding: 5px 20px;
  @media (max-width: 900px) {
    width: 100%
  }
`;

export const MainText = styled.p`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    font-family: "Palanquin";
    font-style: normal;
    font-weight: 600;
    text-align: center;
    transition: 0.3s;
`;

export const CustomTextField = styled.input`
    height: 40px;
    border-radius: 10px;
    background: white;
    border: 1px solid grey;
    color: black;
    font-weight: 600;
    margin: auto;
    padding-left: 10px;
    width: 95%;
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

  &:hover{
    background: #ffffff;
    color: black;
  }
`;
