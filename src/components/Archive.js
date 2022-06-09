import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    
    height: "80vh",
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const Component = styled.div`
   
    /*
    justify-content: center;
    flex: 2;
    
    height: 100%; */
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto ;
    /* align-items: center; */
    justify-content: center;
    margin-top: 10px;
`;
const ArchiveSection = ({ archive, setArchive, isChanged, setIsChanged }) => {
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
        <Box style={style}>
            <Component>
                <Typography align='center' variant='h3'>
                    Archives
                </Typography>
                <Cards>
                    {archive.map((todo) => {
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
        </Box>
    );
};

export default ArchiveSection;
