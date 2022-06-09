import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DeleteIcon from "@mui/icons-material/Delete";
import SyncIcon from "@mui/icons-material/Sync";
import DoneIcon from "@mui/icons-material/Done";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function ManuButton({ data, isChanged, setIsChanged }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleToProgress = () => {
        let newItem;
        console.log(data);
        if (data.isArchive === true) {
            console.log("Hi");
            let curArchive = JSON.parse(localStorage.getItem("archive"));
            console.log(curArchive);
            let newArchive = curArchive.filter((todo) => todo.key !== data.key);
            localStorage.setItem("archive", JSON.stringify(newArchive));
            newItem = curArchive.filter((todo) => todo.key === data.key);
            console.log(curArchive);
            console.log(newItem);
            console.log(data.key);
            newItem[0].isArchive = false;
        } else {
            let curTodo = JSON.parse(localStorage.getItem("todos"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            localStorage.setItem("todos", JSON.stringify(newTodo));
            newItem = curTodo.filter((todo) => todo.key === data.key);
        }
        let curProgress = JSON.parse(localStorage.getItem("progress"));
        newItem[0].tag = 1;
        curProgress.push(...newItem);

        localStorage.setItem("progress", JSON.stringify(curProgress));
        handleClose();
        setIsChanged(!isChanged);
    };
    const handleToDone = () => {
        let newItem;
        if (data.isArchive) {
            console.log("Hi");
            let curArchive = JSON.parse(localStorage.getItem("archive"));
            console.log(curArchive);
            let newArchive = curArchive.filter((todo) => todo.key !== data.key);
            localStorage.setItem("archive", JSON.stringify(newArchive));
            newItem = curArchive.filter((todo) => todo.key === data.key);
            newItem[0].isArchive = false;
        } else if (data.tag === 1) {
            let curProgress = JSON.parse(localStorage.getItem("progress"));
            let newProgress = curProgress.filter(
                (todo) => todo.key !== data.key
            );
            localStorage.setItem("progress", JSON.stringify(newProgress));
            newItem = curProgress.filter((todo) => todo.key === data.key);
        } else if (data.tag === 0) {
            let curTodo = JSON.parse(localStorage.getItem("todos"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            localStorage.setItem("todos", JSON.stringify(newTodo));
            newItem = curTodo.filter((todo) => todo.key === data.key);
        }
        console.log(newItem);
        newItem[0].tag = 2;
        let curDone = JSON.parse(localStorage.getItem("done"));
        curDone.push(...newItem);

        localStorage.setItem("done", JSON.stringify(curDone));
        handleClose();
        setIsChanged(!isChanged);
    };
    const handleDelete = () => {
        if (data.isArchive) {
            let curTodo = JSON.parse(localStorage.getItem("archive"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("archive", JSON.stringify(newTodo));
        }
        if (data.tag === 0) {
            let curTodo = JSON.parse(localStorage.getItem("todos"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("todos", JSON.stringify(newTodo));
        } else if (data.tag === 1) {
            let curTodo = JSON.parse(localStorage.getItem("progress"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("progress", JSON.stringify(newTodo));
        } else {
            let curTodo = JSON.parse(localStorage.getItem("done"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("done", JSON.stringify(newTodo));
        }
        handleClose();
        setIsChanged(!isChanged);
    };
    const handleToArchive = () => {
        let newItem;
        if (data.tag === 0) {
            let curTodo = JSON.parse(localStorage.getItem("todos"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("todos", JSON.stringify(newTodo));
            newItem = curTodo.filter((todo) => todo.key === data.key);
        } else if (data.tag === 1) {
            let curTodo = JSON.parse(localStorage.getItem("progress"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("progress", JSON.stringify(newTodo));
            newItem = curTodo.filter((todo) => todo.key === data.key);
        } else {
            let curTodo = JSON.parse(localStorage.getItem("done"));
            let newTodo = curTodo.filter((todo) => todo.key !== data.key);
            console.log(newTodo);
            localStorage.setItem("done", JSON.stringify(newTodo));
            newItem = curTodo.filter((todo) => todo.key === data.key);
        }
        let curArchive = JSON.parse(localStorage.getItem("archive"));
        newItem[0].isArchive = true;
        curArchive.push(...newItem);
        localStorage.setItem("archive", JSON.stringify(curArchive));
        handleClose();
        setIsChanged(!isChanged);
    };

    return (
        <div>
            <Button
                id='demo-customized-button'
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                disableElevation
                onClick={handleClick}
                sx={{ color: "black" }}>
                <MoreHorizIcon />
            </Button>
            <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem
                    onClick={handleToProgress}
                    disabled={
                        data.tag !== 0 ||
                        (data.tag === 1 && data.isArchive === true)
                            ? false
                            : true
                    }
                    disableRipple>
                    <SyncIcon />
                    Move to Progress
                </MenuItem>
                <MenuItem
                    onClick={handleToDone}
                    disabled={data.tag >= 2}
                    disableRipple>
                    <DoneIcon />
                    Move to Done
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                    onClick={handleToArchive}
                    disabled={data.isArchive}
                    disableRipple>
                    <ArchiveIcon />
                    Move to Archive
                </MenuItem>
                <MenuItem onClick={handleDelete} disableRipple>
                    <DeleteIcon />
                    Delete
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
