import React from 'react';

const Task = (props) => {
    let priorityStyle = {};
    if (props.priority === "High") {
        priorityStyle = { backgroundColor: "red", color: "white", padding: "5px 10px", borderRadius: "6px" };
    } else if (props.priority === "Medium") {
        priorityStyle = { backgroundColor: "goldenrod", color: "white", padding: "5px 10px", borderRadius: "6px" };
    } else if (props.priority === "Low") {
        priorityStyle = { backgroundColor: "green", color: "white", padding: "5px 10px", borderRadius: "6px" };
    }

    return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p> Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p style={priorityStyle}>{props.priority}</p>
            <button className='doneButton' onClick={props.markDone}>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}


export default Task;
