import React from "react"

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


type TodolistPropsType = {
    title: string,
    task: TaskType[],
    removeTasks: (taskID: number) => void;
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input placeholder="Введите задачу" />
                <button>+</button>
            </div>
            <ul>
                {props.task.map((t) => {
                    return (
                        <li>
                            <button onClick={() => { props.removeTasks(t.id) }}>X</button>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div >
    )
}