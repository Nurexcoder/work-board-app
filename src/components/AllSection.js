import React, { useEffect, useState } from "react";
import ProgressSection from "./ProgressSection";
import TodoSection from "./TodoSection";
import styled from "styled-components";
import DoneSection from "./Done";
import {
    Button,
    FilledInput,
    Input,
    InputAdornment,
    Modal,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import AddTodo from "./AddTodo";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* overflow-y: scroll; */
    /* overflow-x: hidden; */
    align-items: flex-start;
    padding: 10px 0;
`;
const ManuComponent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
`;
const AddTodoButton = styled(Button)`
    height: 40px !important;
    margin: 0 10px;
`;
const Sections = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    /* padding:0 0px ; */
`;
const SeachBar = styled(OutlinedInput)`
    /* width: ; */
    height: 40px !important;
    margin-right: 10px;
    /* padding: 0 !important; */
`;
const AllSection = () => {
    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isChanged, setIsChanged] = useState(true);
    const tempTodos = [
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            key: 0,
            tag: 0,
        },
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            key: 1,
            tag: 0,
        },
        {
            title: "The work",
            desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            key: 2,
            tag: 0,
        },
    ];
    useEffect(() => {
        let curTodos = JSON.parse(localStorage.getItem("todos"));
        let curProgress = JSON.parse(localStorage.getItem("progress"));
        let curDone = JSON.parse(localStorage.getItem("done"));
        let curArchive = JSON.parse(localStorage.getItem("archive"));
        if (!curTodos) {
            console.log("Hi");
            localStorage.setItem("todos", JSON.stringify(tempTodos));
            console.log(tempTodos.length);
            localStorage.setItem("keys", tempTodos.length);
        }
        if (!curProgress) {
            console.log("Hi");
            curProgress = [];
            localStorage.setItem("progress", JSON.stringify(curProgress));
        }
        if (!curDone) {
            console.log("Hi");
            curDone = [];
            localStorage.setItem("done", JSON.stringify(curDone));
        }
        if (!curArchive) {
            console.log("Hi");
            curArchive = [];
            localStorage.setItem("archive", JSON.stringify(curArchive));
        }
        let nowTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(nowTodos);
        setProgress(curProgress);
        setDone(curDone);
    }, [isChanged]);

    useEffect(() => {}, []);

    return (
        <Component>
            <ManuComponent>
                <SeachBar
                    id='input-with-icon-adornment'
                    variant='outlined'
                    endAdornment={
                        <InputAdornment position='left'>
                            <Search />
                        </InputAdornment>
                    }
                />
                <AddTodoButton
                    variant='contained'
                    color='primary'
                    onClick={handleOpen}>
                    <Add />
                    Add Todo
                </AddTodoButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <AddTodo
                        handleClose={handleClose}
                        isChanged={isChanged}
                        setIsChanged={setIsChanged}
                    />
                </Modal>
            </ManuComponent>
            <Sections>
                <TodoSection
                    todos={todos}
                    setTodos={setTodos}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                />
                <ProgressSection
                    progress={progress}
                    setProgress={setProgress}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                />
                <DoneSection
                    done={done}
                    setDone={setDone}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                />
            </Sections>
        </Component>
    );
};

export default AllSection;
