import React from "react";
import {
    UserName, Content, Wrapper, 
  } from './styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(props) {
  return (
    <>
      <Wrapper>
        <Content>
          
          <UserName>
            Andrew K.
            <AccountCircleIcon></AccountCircleIcon>
          </UserName>
        </Content>
      </Wrapper>
    </>
  );
}

export default Header;
