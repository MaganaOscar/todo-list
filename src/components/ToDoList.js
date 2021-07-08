import React, {useState} from 'react';

const ToDoList = props => {
    const [toDo, setToDo] = useState("");
    const [list, setList] = useState([]);

    const handleSubmitTask = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        const newList = [...list];
        newList.push({task:task, clicked: false});
        setToDo(task);
        setList(newList);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        let this_task = e.target.task.value;
        const newList = list.filter((task) => task != this_task)
        setList(newList);
    }

    const checked = (i) => {
        const newList = [...list];
        newList[i].clicked = !newList[i].clicked;
        setList(newList);
    }

    return (
        <div>
            <form onSubmit={handleSubmitTask}>
                <label htmlFor="task">ToDo: </label>
                <input type="text" name="task"></input>
                <button>Add</button>
            </form>
                {
                    list.map( (task, i) => {
                        return (
                            <form onSubmit={handleDelete}>
                                {
                                    task.clicked ?
                                    <label className="strikethrough" htmlFor={task.task}>{task.task}</label>:
                                    <label htmlFor={task.task}>{task.task}</label>
                                }
                                <input type="checkbox" name="task" value={task.task} onChange={(e) => checked(i)}></input>
                                <button>Delete</button>
                            </form>
                        )
                    })
                }
        </div>
    )

}

export default ToDoList;