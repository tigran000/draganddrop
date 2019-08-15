import React, { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Column from "./components/Column"
import initialData from "./initialData"
import "./App.css"
function App() {
  const [state, setState] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    if (start === finish) {
      const newPersonIds = Array.from(start.personIds)
      newPersonIds.splice(source.index, 1)
      newPersonIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        personIds: newPersonIds
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }

      setState(newState)
      return
    }
    const startPersonIds = Array.from(start.personIds)
    startPersonIds.splice(source.index, 1)

    const newStart = {
      ...start,
      personIds: startPersonIds
    }
    const finishPersonIds = Array.from(finish.personIds)
    finishPersonIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finish,
      personIds: finishPersonIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    setState(newState)
    return
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId]
          const persons = column.personIds.map(
            personId => state.persons[personId]
          )
          return <Column key={column.id} column={column} persons={persons} />
        })}
      </DragDropContext>
    </div>
  )
}
export default App
