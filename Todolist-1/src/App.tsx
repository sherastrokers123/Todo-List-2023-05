import React from 'react';
import './App.css';
import { Todolist } from './Components/Todolist';

function App() {

    let tasks1 = [
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redux", isDone: false },
    ]



    return (

        <div className="App">
            <Todolist title="What to learn?" tasks={tasks1} />
        </div>
    );
}


export default App;
