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

    function removeTask(id: number) {
        tasks1 = tasks1.filter((t) => {
            if (t.id !== id) {
                return true
            } else {
                return false
            }
        })
        console.log(tasks1);
    }

    return (

        <div className="App">
            <Todolist
                title="What to learn?"
                tasks={tasks1}
                removeTask={removeTask}
            />
        </div>
    );
}


export default App;
