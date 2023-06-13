
import { useState } from 'react';
import './App.css';
import { Todolist, TaskType } from './Components/Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTask] = useState<TaskType[]>
        (
            [
                { id: v1(), title: "css", isDone: true },
                { id: v1(), title: "js", isDone: false },
                { id: v1(), title: "html", isDone: true },
                { id: v1(), title: "C++", isDone: false },
                { id: v1(), title: "Python", isDone: false },
            ]
        )

    //!checkbox
    let changeCheckboxStatus = (taskID: string, isDone: boolean) => {
        let task = tasks.find((t) => {
            return t.id === taskID;
        });
        if (task) {
            return task.isDone = !task.isDone;
        }
        setTask([...tasks])
    };


    //!Remove task

    let removeTask = (id: string) => {
        tasks = tasks.filter((t) => {
            if (t.id !== id) {
                return true;
            } else {
                return false;
            }
        })
        setTask(tasks)
    };

    //!Filtered tasks

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
    };

    // !Add task
    let addTask = (title: string) => {
        let newTask = { id: v1(), title: title, isDone: false };
        let newTasks = [newTask, ...tasks];
        setTask(newTasks);
    }


    return (
        <div className="App">
            <Todolist
                title='Todo List'
                tasks={tasksForTdolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeCheckboxStatus={changeCheckboxStatus}
            />
        </div >
    )
}

export default App;