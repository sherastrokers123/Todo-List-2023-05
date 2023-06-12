
import { useState } from 'react';
import './App.css';
import { Todolist } from './Components/Todolist';

// let task = [
//     { id: 1, title: "css", isDone: true },
//     { id: 2, title: "js", isDone: false },
//     { id: 3, title: "html", isDone: true },
//     { id: 4, title: "C++", isDone: false },
//     { id: 5, title: "Python", isDone: false },
//


function App() {

    let [task, setTask] = useState([
        { id: 1, title: "css", isDone: true },
        { id: 2, title: "js", isDone: false },
        { id: 3, title: "html", isDone: true },
        { id: 4, title: "C++", isDone: false },
        { id: 5, title: "Python", isDone: false },
    ])


    // remove task

    let removeTasks = (id: number) => {
        task = task.filter((t) => {
            if (t.id !== id) {
                return true;
            }
        })
        setTask(task);
    }

    return (
        <div className="App">
            <Todolist
                title='Todo List'
                task={task}
                removeTasks={removeTasks}
            />
        </div >
    );
}

export default App;