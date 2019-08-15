import React from "react"
import { Draggable } from "react-beautiful-dnd"

import "./Person.css"
const Person = ({ person, index }) => (
  <Draggable draggableId={person.id} index={index}>
    {provided => (
      <div
        className="Person"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <img
          src={require(`../../assets/${person.img}`)}
          alt="avatar"
          className="avatar"
        />
        <div>
          <p className="lastname">{person.lastname} </p>
          <p className="name">{person.name} </p>
        </div>
      </div>
    )}
  </Draggable>
)

export default Person
