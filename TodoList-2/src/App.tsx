
import { useState } from 'react';
import './App.css';
import { Todolist, TaskType } from './Components/Todolist';
import { v1 } from 'uuid';

// let task = [
//     { id: 1, title: "css", isDone: true },
//     { id: 2, title: "js", isDone: false },
//     { id: 3, title: "html", isDone: true },
//     { id: 4, title: "C++", isDone: false },
//     { id: 5, title: "Python", isDone: false },
//
export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTask] = useState<TaskType[]>
        (
            [
                { id: 1, title: "css", isDone: true },
                { id: 2, title: "js", isDone: false },
                { id: 3, title: "html", isDone: true },
                { id: 3, title: "C++", isDone: false },
                { id: 4, title: "Python", isDone: false },
            ]

        )

    console.log(tasks)
    //Remove task

    let removeTask = (id: number) => {
        tasks = tasks.filter((t) => {
            if (t.id !== id) {
                return true
            } else {
                return false
            }
        })
        setTask(tasks)
    }

    // Filtered tasks

    let [filter, setFilter] = useState<FilterValuesType>("All");
    let tasksForTdolist = tasks;

    if (filter === "Completed") {
        tasksForTdolist = tasks.filter((t) => {
            return t.isDone === true;
        })
    }
    if (filter === "Active") {
        tasksForTdolist = tasks.filter((t) => {
            return t.isDone === false;
        })
    }

    let changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist
                title='Todo List'
                tasks={tasksForTdolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div >
    );
}

export default App;