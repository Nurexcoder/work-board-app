import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    height: 100%;
    overflow-y: scroll;

    /* padding: 10px 10px; */
    /* justify-content: center; */
    align-items: center;
    border-right: 1px solid black;
    margin-bottom: 10px;
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
const TodoSection = ({ todos, setTodos, isChanged, setIsChanged }) => {
    return (
        <Component>
            <Typography sx={{ position: "sticky" }} align='center' variant='h3'>
                Todo
            </Typography>

            <Cards>
                {todos.map((todo) => {
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

export default TodoSection;
