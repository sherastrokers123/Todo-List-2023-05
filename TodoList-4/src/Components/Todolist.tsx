import React, { ChangeEvent, useState, KeyboardEvent } from "react"
import { FilterValuesType } from "../App"

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}


type TodolistPropsType = {
    title: string,
    tasks: TaskType[],
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (title: string) => void,
    changeCheckboxStatus: (taskID: string, isDone: boolean) => void
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onNewTaskTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    };
    const onNewTaskTitleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        }


    };
    const onAllChangeFilterHandler = () => {
        props.changeFilter("All")
    };
    const onActiveChangeFilterHandler = () => {
        props.changeFilter("Active")
    };
    const onCompletedChangeFilterHandler = () => {
        props.changeFilter("Completed")
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input placeholder="Введите задачу"
                    value={newTaskTitle}
                    onChange={onNewTaskTitleChangeHandler}
                    onKeyDown={onNewTaskTitleOnKeyDown}
                    className={"error"}
                />
                <button onClick={addTask}>+</button>
            </div>

            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveHandler = () => {
                            props.removeTask(t.id)
                        }
                        return (
                            <li key={t.id}>
                                <button onClick={onRemoveHandler}>X</button>
                                <input type="checkbox"
                                    checked={t.isDone}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => { props.changeCheckboxStatus(t.id, e.currentTarget.checked) }}
                                />
                                <span>{t.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={onAllChangeFilterHandler}>All</button>
                <button onClick={onActiveChangeFilterHandler}>Active</button>
                <button onClick={onCompletedChangeFilterHandler}>Completed</button>
            </div>
        </div >
    )
} 