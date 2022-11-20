import React from 'react';
import {
  NameWrapper,
  Wrapper,
  ProjectName
} from "./styled";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
import RenderItem from './RenderItem';

function ProjectBanner(props) {
    return (
      <Wrapper>
        <NameWrapper>
          <StarBorderIcon fontSize="large"></StarBorderIcon>
          <ProjectName>Insurance</ProjectName>
          <EditIcon fontSize="small"></EditIcon>
          
        </NameWrapper>
        <RenderItem></RenderItem>
       
        
      </Wrapper>
    );
}

export default ProjectBanner;