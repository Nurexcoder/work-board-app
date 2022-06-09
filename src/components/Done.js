import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const Component = styled.div`
    /* display: flex; */
    /* flex-direction: column; */

    justify-content: center;
    flex: 2;

    width: 100%;

    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Cards = styled.div`
    display: grid;
    /* grid-template-columns: auto ; */
    /* align-items: center; */
    justify-content: center;
`;
const DoneSection = ({ done, setDone, isChanged, setIsChanged }) => {
    const todos = [
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        },
    ];
    return (
        <Component>
            <Typography align='center' variant='h3'>
                Done
            </Typography>
            <Cards>
                {done.map((todo) => {
                    return (
                        <TodoCard
                            todoData={todo}
                            isChanged={isChanged}
                            setIsChanged={setIsChanged}
                        />
                    );
                })}
            </Cards>
        </Component>
    );
};

export default DoneSection;
