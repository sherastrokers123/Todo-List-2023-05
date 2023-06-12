import React from 'react';
import './App.css';
import { Todolist } from './Components/Todolist';

let task = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: false },
    { id: 3, title: "html", isDone: true },
    { id: 4, title: "angular", isDone: false },
]


function App() {
    return (
        <div className="App">
            <Todolist title='React' task={task} />
        </div >
    );
}

export default App;
