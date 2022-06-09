import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;

    height: 100%;
    overflow-y: scroll;
    /* padding: 10px 10px; */
    border-right: 1px solid black;
    /* max-width: 600px; */

    ::-webkit-scrollbar {
        display: none;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-start;
    align-self: flex-start;
    justify-content: center;
`;
const ProgressSection = ({
    progress,
    setProgress,
    isChanged,
    setIsChanged,
}) => {
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
                Progress
            </Typography>
            <Cards>
                {progress.map((todo) => {
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

export default ProgressSection;
