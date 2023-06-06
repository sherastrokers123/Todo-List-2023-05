import React from "react"

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TasksType[]
}


export const Todolist = (props: PropsType) => {

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return (
                            <li>
                                <button onClick={() => { alert(t.id) }}>X</button>
                                <input type="checkbox" checked={t.isDone} />
                                <span>{t.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button>Active</button>
                <button>All</button>
                <button>Completed</button>
            </div>
        </div>
    )
}