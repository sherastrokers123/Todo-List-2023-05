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
    changeStatusCheckbox: (taskID: string, isDone: boolean) => void,
    filter: FilterValuesType
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onNewTaskTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
        setError(null);
    };
    const onNewTaskTitleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter" && newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        }
        else {
            setError("Title is required");
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError("Title is required");
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
            <h1>{
                props.title
            }</h1>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onNewTaskTitleChangeHandler}
                    onKeyDown={onNewTaskTitleOnKeyDown}
                    className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>

            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveHandler = () => {
                            props.removeTask(t.id)
                        }
                        const onChangeHandlerCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatusCheckbox(t.id, e.currentTarget.checked)
                        }
                        return (
                            <li className={t.isDone === true ? "is-done" : ""} key={t.id}>
                                <button onClick={onRemoveHandler}>X</button>
                                <input
                                    type="checkbox"
                                    checked={t.isDone}
                                    onChange={onChangeHandlerCheckBox}
                                />
                                <span>{t.title}</span>
                            </li>
                        )

                    })
                }
            </ul>
            <div>
                <button
                    className={props.filter === "All" ? "active-filter" : ""} onClick={onAllChangeFilterHandler}>All
                </button>
                <button
                    className={props.filter === "Active" ? "active-filter" : ""}
                    onClick={onActiveChangeFilterHandler}>Active
                </button>
                <button
                    className={props.filter === "Completed" ? "active-filter" : ""} onClick={onCompletedChangeFilterHandler}>Completed
                </button>
            </div>
        </div >
    )
} 