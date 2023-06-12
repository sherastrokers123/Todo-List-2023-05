import React from "react"
import { FilterValuesType } from "../App"

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


type TodolistPropsType = {
    title: string,
    tasks: TaskType[],
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void,
}

export function Todolist(props: TodolistPropsType) {

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input placeholder="Введите задачу" />
                <button >+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <button onClick={() => { props.removeTask(t.id) }}>X</button>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => { props.changeFilter("All") }}>All</button>
                <button onClick={() => { props.changeFilter("Active") }}>Active</button>
                <button onClick={() => { props.changeFilter("Completed") }}>Completed</button>
            </div>
        </div >
    )
} 