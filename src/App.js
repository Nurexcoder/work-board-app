import logo from "./logo.svg";
import "./App.css";
import {  useState } from "react";
import TodoCard from "./components/TodoCard";
import AllSection from "./components/AllSection";
import styled from 'styled-components';

const Component=styled.div`
    margin: 0;
    padding:  0 10px;
    height: 100vh;
    overflow: hidden;

`
function App() {
    const [data, setData] = useState();
    return (
        <Component>
            {/* <TodoCard /> */}
            <AllSection />
        </Component>
    );
}

export default App;
