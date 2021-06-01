import React, { useState } from 'react'
import './styles.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";

const item = {
    id: v4(),
    name: "complete the CV"
}
const item2 = {
    id: v4(),
    name: "complete the JS"
}
const item3 = {
    id: v4(),
    name: "complete the CODING"
}

function TodoWithDnd() {
    const [text, setText] = useState("")
    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: [item, item2, item3]
        },
        "in-progress": {
            title: "In Progress",
            items: []
        },
        "done": {
            title: "Completed",
            items: []
        }
    })
    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }

        // Creating a copy of item before removing it from state
        const itemCopy = { ...state[source.droppableId].items[source.index] }

        setState(prev => {
            prev = { ...prev }
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)


            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }

    const addItem = () => {
        if(!text) return;

        setState(prev => {
            return {
                ...prev,
                todo: {
                    title: "Todo",
                    items: [
                        {
                            id: v4(),
                            name: text
                        },
                        ...prev.todo.items
                    ]
                }
            }
        })

        setText("")
    }

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", padding: "30px 10px" }}>
            <div style={{width: "100%", display: "flex", justifyContent: "center", padding: "5px 0px"}}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button style={{marginLeft: "10px", background: "blue", padding: "3px 5px"}} onClick={addItem}>Add</button>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "space-around", padding: "10px 0px"}}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    {
                        _.map(state, (data, key) => {
                            return (
                                <div key={key} className="column">
                                    <h3 style={{textAlign: "center", borderBottom: "1px solid lightslategray", padding: "5px"}}>{data.title}</h3>
                                    <Droppable droppableId={key}>
                                        {
                                            (provided) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        className={"droppable-col"}
                                                        {...provided.droppableProps}
                                                    >
                                                        {
                                                            data.items.map((el, index) => {
                                                                return (
                                                                    <Draggable key={el.id} index={index} draggableId={el.id}>
                                                                        {
                                                                            (provided, snapshot) => {
                                                                                console.log({snapshot})
                                                                                return (
                                                                                    <div
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                        className={`item ${snapshot.isDragging && "dragging"}`}
                                                                                    >
                                                                                        { el.name}
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        }
                                                                    </Draggable>
                                                                )
                                                            })
                                                        }
                                                        { provided.placeholder}
                                                    </div>
                                                )
                                            }
                                        }
                                    </Droppable>
                            </div>
                        )
                    })
                }
            </DragDropContext>
            </div>
        </div>
    )
}

export default TodoWithDnd
