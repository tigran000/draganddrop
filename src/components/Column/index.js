import React from "react"
import { Droppable } from "react-beautiful-dnd"
import Person from "../Person"
import pokemon from "../../assets/pokemon.png"

import "./Column.css"
const Column = ({ column, persons }) => (
  <div className="Column">
    <div className={`Column-header ${column.color}`}>
      <img src={pokemon} alt="pokemon" />
    </div>
    <Droppable droppableId={column.id}>
      {provided => (
        <div
          className="Column-content"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {persons.map((person, index) => (
            <Person key={person.id} person={person} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
)

export default Column
