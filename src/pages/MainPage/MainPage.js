import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import User from "../../components/User/User";
import StatusButton from "../../components/Status button/StatusButton";
import {Wrapper, WrapperButtonMenu, WrapperNavMenu} from "./styled";
import TableMain from "../../components/TableMain/TableMain";
import FilterMenu, {options} from "../../components/FilterMenu/FilterMenu";
import {getProjects} from "../../api/data/project";

export default function MainPage() {
    const [projects, setProjects] = useState(null)
    const [filterBy, setFilterBy] = useState("all")

    useEffect(() => {
        if(!projects) {
            getProjects().then((result) => {
                setProjects(result)
            }).catch(() => {
                setProjects([])
            })
        }
    }, [])

    useEffect(() => {
        if(filterBy === options[0]){

        } else if(filterBy === options[1]){

        } else if(filterBy === options[2]){

        } else if(filterBy === options[3]){

        } else {

        }
    }, [filterBy])

    return (
    <Wrapper>
      <WrapperNavMenu>
        <Header></Header>
        <User></User>
      </WrapperNavMenu>

      <WrapperButtonMenu>
        <StatusButton></StatusButton>
        <FilterMenu setFilterBy={setFilterBy}/>
      </WrapperButtonMenu>

      <TableMain projects={projects}></TableMain>
    </Wrapper>
    );
}
