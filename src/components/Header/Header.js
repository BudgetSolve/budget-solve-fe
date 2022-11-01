import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import {
    NavLink, Logo, HeaderContent, HeaderWrapper, 
  } from './styled';


function Header(props) {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Logo>Budget Solve</Logo>
          <NavLink>
            Projects
            <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
          </NavLink>
          <NavLink>
            Library
            <DehazeIcon fontSize="small"></DehazeIcon>
          </NavLink>
          <NavLink>
            Team
            <PersonIcon></PersonIcon>
          </NavLink>
          <NavLink>
            Settings
            <SettingsIcon></SettingsIcon>
          </NavLink>
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
}

export default Header;
